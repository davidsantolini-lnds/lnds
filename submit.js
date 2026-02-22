import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { form_slug, email, payload } = req.body || {};

    if (!form_slug || typeof form_slug !== "string") {
      return res.status(400).json({ error: "form_slug manquant" });
    }
    if (!payload || typeof payload !== "object") {
      return res.status(400).json({ error: "payload invalide" });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceKey) {
      return res.status(500).json({ error: "Variables d’environnement manquantes" });
    }

    const supabase = createClient(supabaseUrl, serviceKey, {
      auth: { persistSession: false }
    });

    const { error } = await supabase.from("form_submissions").insert({
      form_slug,
      email: email ? String(email).trim() : null,
      payload
    });

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(400).json({ error: "JSON invalide / requête invalide" });
  }
}
