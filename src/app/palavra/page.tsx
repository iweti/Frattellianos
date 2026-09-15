import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MessageFeed } from "@/components/message-feed";

export const metadata: Metadata = {
  title: "Palavra",
  description:
    "Versículos e mensagens compartilhados pela comunidade Frattellianos.",
};

export default function WordPage() {
  return (
    <>
      <SiteHeader active="palavra" />

      <main className="overflow-hidden px-4">
        <section
          className="mx-auto w-full max-w-[880px] py-[clamp(4rem,9vw,7rem)]"
          aria-labelledby="word-title"
        >
          <p className="mb-4 text-sm font-extrabold tracking-[0.18em] text-brand-red uppercase">
            Fé para todos os dias
          </p>
          <h1
            className="mb-4 text-balance font-serif text-[clamp(3rem,7vw,5.5rem)] leading-[0.95] font-normal tracking-[-0.05em]"
            id="word-title"
          >
            Palavra
          </h1>
          <p className="mb-10 max-w-2xl text-[clamp(1rem,1.5vw,1.15rem)] leading-7 text-[#c7c9ce]">
            Compartilhe uma palavra e acompanhe o versículo escolhido para cada
            novo dia.
          </p>
          <MessageFeed />
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
