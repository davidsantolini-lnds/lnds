import { createClient } from "@supabase/supabase-js";

async function readBody(req) {
  // 1) Si Vercel a déjà parsé le body
  if (req.body && typeof req.body === "object") return req.body;

  // 2) Si le body arrive en string JSON
  if (typeof req.body === "string") {
    try { return JSON.parse(req.body); } catch {}
  }

  // 3) Sinon on lit le flux brut (works in many Node serverless contexts)
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw) return null;

  // JSON ?
  try { return JSON.parse(raw); } catch {}

  // form-urlencoded ? (ex: a=1&b=2)
  try {
    const params = new URLSearchParams(raw);
    const obj = {};
    for (const [k, v] of params.entries()) obj[k] = v;
    // si payload est du JSON string, on tente de le parser
    if (obj.payload) {
      try { obj.payload = JSON.parse(obj.payload); } catch {}
    }
    return obj;
  } catch {}

  return null;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const body = await readBody(req);
    if (!body) return res.status(400).json({ error: "Body vide ou illisible" });

    const form_slug = String(body.form_slug || "").trim();
    const email = body.email ? String(body.email).trim() : null;
    const payload = body.payload ?? null;

    if (!form_slug) return res.status(400).json({ error: "form_slug manquant" });
    if (!payload || typeof payload !== "object")
      return res.status(400).json({ error: "payload invalide (doit être un objet JSON)" });

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseUrl || !serviceKey)
      return res.status(500).json({ error: "Variables d’environnement manquantes côté Vercel" });

    const supabase = createClient(supabaseUrl, serviceKey, { auth: { persistSession: false } });

    const { error } = await supabase.from("form_submissions").insert({
      form_slug,
      email,
      payload,
    });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(400).json({ error: "Requête invalide" });
  }
}
