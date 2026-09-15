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
          className="mx-auto w-[calc(100%_-_2rem)] max-w-[1000px] py-[clamp(5rem,12vw,10rem)] pb-[clamp(4rem,8vw,7rem)] text-center"
          aria-labelledby="message-title"
        >
          <Eyebrow>Nossa mensagem</Eyebrow>
          <h1
            className="mx-auto mb-6 max-w-[900px] text-balance font-serif text-[clamp(3rem,7vw,6.8rem)] leading-[0.94] font-normal tracking-[-0.055em]"
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
          className="mx-auto grid w-[calc(100%_-_2rem)] max-w-[1180px] grid-cols-1 border border-white/[0.14] min-[901px]:grid-cols-3"
          aria-label="Missão, visão e valores"
        >
          {pillars.map((pillar, index) => (
            <article
              className="flex min-h-72 flex-col border-b border-white/[0.14] p-[clamp(1.5rem,3.5vw,3rem)] last:border-b-0 min-[901px]:min-h-96 min-[901px]:border-r min-[901px]:border-b-0 min-[901px]:last:border-r-0"
              key={pillar.title}
            >
              <span className="text-[0.8rem] font-extrabold tracking-[0.14em] text-brand-red">
                0{index + 1}
              </span>
              <h2 className="mt-auto mb-4 text-balance font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal">
                {pillar.title}
              </h2>
              <p className="mb-0 text-base leading-7 text-muted">
                {pillar.text}
              </p>
            </article>
          ))}
        </section>

        <blockquote className="mx-auto my-[clamp(4rem,9vw,8rem)] w-[calc(100%_-_2rem)] max-w-[1180px] bg-brand-red p-[clamp(3rem,7vw,6rem)] text-center text-white max-[620px]:w-full">
          <p className="mx-auto mb-5 max-w-[850px] font-serif text-[clamp(2rem,5vw,4.8rem)] leading-[1.08]">
            “Eis aí um rei que irá reinar com justiça.”
          </p>
          <cite className="text-[0.8rem] font-extrabold tracking-[0.16em] not-italic uppercase">
            Isaías 32:1
          </cite>
        </blockquote>

        <section
          className="mx-auto w-[calc(100%_-_2rem)] max-w-[920px] pb-[clamp(5rem,10vw,9rem)] text-center"
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
