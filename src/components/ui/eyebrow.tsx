import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-2xl font-extrabold tracking-[0.18em] text-brand-red uppercase">
      {children}
    </p>
  );
}
