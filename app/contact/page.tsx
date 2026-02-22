'use client';

import { useMemo, useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Acquéreur');
  const [message, setMessage] = useState('');

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Contact LNDS - ${role}`);
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\nRôle: ${role}\n\nMessage:\n${message}`);
    return `mailto:contact@lnds.fr?subject=${subject}&body=${body}`;
  }, [name, email, role, message]);

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-4xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 text-slate-600">Décrivez votre projet, nous revenons vers vous rapidement.</p>

        <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Nom</label>
            <input id="name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
          </div>
          <div>
            <label htmlFor="role" className="mb-2 block text-sm font-medium text-slate-700">Rôle</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)} className="w-full rounded-xl border border-slate-300 px-4 py-3">
              <option>Acquéreur</option>
              <option>Cédant</option>
              <option>Conseil / Investisseur</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
            <textarea id="message" rows={6} required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded-xl border border-slate-300 px-4 py-3" />
          </div>
          <a href={mailto} className="inline-block rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            Envoyer par email
          </a>
        </form>
      </section>
    </div>
  );
}
