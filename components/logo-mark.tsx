import React from 'react';

export function LogoMark() {
  return (
    <div className="flex items-center gap-3" aria-label="LNDS">
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="42" height="42" rx="12" className="fill-slate-100" />
        <path d="M8 26L16 15L22 22L29 13L36 26" className="stroke-slate-700" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 31C13 27.5 18 27.5 22 31C26 34.5 31 34.5 36 31" className="stroke-blue-600" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <div>
        <p className="text-base font-semibold tracking-tight text-slate-900">LNDS</p>
        <p className="text-xs text-slate-500">L&apos;exigence devient la norme</p>
      </div>
    </div>
  );
}
