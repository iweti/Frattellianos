import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Missão",
  description: "Missão, visão e valores da comunidade Frattellianos.",
};

const pillars = [
  {
    title: "Missão",
    text: "Compartilhar o evangelho com linguagem simples, humana e acessível, para que cada pessoa possa ouvir, compreender e se sentir acolhida.",
  },
  {
    title: "Visão",
    text: "Formar uma grande comunidade cristã sem limites de placa ou endereço, levando mais pessoas ao caminho do Senhor por meio de mensagens, produtos e encontros.",
  },
  {
    title: "Valores",
    text: "Servir com voluntariedade, amor, carinho e dedicação. Um sorriso, um bom dia ou um minuto de atenção também podem revelar o cuidado de Cristo.",
  },
];

export default function MessagePage() {
  return (
    <>
      <SiteHeader active="missao" />

      <main className="overflow-hidden">
        <section
          className="mx-auto w-[calc(100%-2rem)] max-w-250 py-[clamp(5rem,12vw,10rem)] pb-[clamp(4rem,8vw,7rem)] text-center"
          aria-labelledby="message-title"
        >
          <h1
            className="mx-auto mb-6 max-w-225 text-balance font-serif text-[clamp(3rem,7vw,6.8rem)] leading-[0.94] font-normal tracking-[-0.055em]"
            id="message-title"
          >
            Falar de Cristo de um jeito que todos entendam.
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-[clamp(1rem,1.5vw,1.2rem)] leading-7 text-[#c7c9ce]">
            Jesus ensinava com simplicidade e alcançava pessoas de todas as
            idades. É essa clareza, próxima e sem julgamentos, que Frattellianos
            deseja levar adiante.
          </p>
        </section>

        <section
          className="bg-white px-[max(1rem,calc((100vw-1180px)/2))] py-[clamp(5rem,10vw,8rem)] text-brand-black"
          aria-label="Missão, visão e valores"
        >
          <div className="mx-auto grid max-w-295 grid-cols-1 gap-6 min-[901px]:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article
                className="flex min-h-72 flex-col rounded-2xl border border-brand-black/15 bg-[#f7f7f5] p-[clamp(1.5rem,3.5vw,3rem)] shadow-sm min-[901px]:min-h-96"
                key={pillar.title}
              >
                <span className="text-[0.8rem] font-extrabold tracking-[0.14em] text-brand-red">
                  0{index + 1}
                </span>
                <h2 className="mt-auto mb-4 text-balance font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal">
                  {pillar.title}
                </h2>
                <p className="mb-0 text-base leading-7 text-[#56595e]">
                  {pillar.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <blockquote className="mx-auto my-[clamp(4rem,9vw,8rem)] w-[calc(100%-2rem)] max-w-230 px-4 py-[clamp(2rem,5vw,4rem)] text-center text-white before:mx-auto before:mb-8 before:block before:h-1 before:w-16 before:rounded-full before:bg-brand-red before:content-['']">
          <p className="mx-auto mb-5 max-w-212.5 font-serif text-[clamp(2rem,5vw,4.8rem)] leading-[1.08]">
            “Eis aí um rei que irá reinar com justiça.”
          </p>
          <cite className="text-[0.8rem] font-extrabold tracking-[0.16em] text-brand-red not-italic uppercase">
            Isaías 32:1
          </cite>
        </blockquote>

        <section
          className="mx-auto w-[calc(100%-2rem)] max-w-230 pb-[clamp(5rem,10vw,9rem)] text-center"
          aria-labelledby="manifesto-title"
        >
          <Eyebrow>Em uma frase</Eyebrow>
          <h2
            className="mb-[1.4rem] text-balance font-serif text-[clamp(2.2rem,5vw,4.6rem)] leading-[1.02] font-normal tracking-[-0.045em]"
            id="manifesto-title"
          >
            Não queremos ser o centro. Queremos apontar o caminho.
          </h2>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
