import type { Metadata } from "next";
import Link from "next/link";

import { Eyebrow } from "@/components/ui/eyebrow";
import { Logo } from "@/components/ui/logo";

export const metadata: Metadata = { title: "Acesso" };

export default function LoginPage() {
  return (
    <main className="mx-auto grid min-h-screen w-[calc(100%_-_2rem)] max-w-[540px] content-center gap-8 overflow-hidden py-16">
      <Logo />
      <section className="bg-white p-[clamp(1.75rem,6vw,3.5rem)] text-brand-black">
        <Eyebrow>Área reservada</Eyebrow>
        <h1 className="mb-[0.67em] text-balance font-serif text-[clamp(2.2rem,6vw,4rem)] leading-none font-normal">
          Acesso em preparação.
        </h1>
        <p className="mb-4 text-base leading-7 text-[#5f6268]">
          Este espaço será ativado quando autenticação e usuários forem definidos.
        </p>
        <Link
          className="inline-flex items-center gap-[0.65rem] font-extrabold text-brand-red no-underline hover:text-[#ff4b46]"
          href="/"
        >
          Voltar para o início
        </Link>
      </section>
    </main>
  );
}
