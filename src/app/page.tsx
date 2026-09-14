import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Eyebrow } from "@/components/ui/eyebrow";
import { joinClasses } from "@/lib/utils";

const chapters = [
  {
    number: "01",
    title: "Um sonho entre amigos",
    text: "Ainda na escola, três jovens imaginaram uma marca capaz de ajudar organizações a se comunicarem com clareza e propósito. O projeto não saiu do papel naquele momento, mas deixou uma semente.",
  },
  {
    number: "02",
    title: "O tempo de espera",
    text: "Por anos, o sonho ficou em silêncio. Nesse intervalo vieram novos valores, outra forma de enxergar o mundo e um sentido que transformou uma ideia de comunicação em chamado.",
  },
  {
    number: "03",
    title: "Uma família aos pés da cruz",
    text: "Frattellianos renasceu como comunidade: um lugar para falar de fé com liberdade, acolhimento e sem julgamentos. A marca passou a apontar para Cristo e a reunir irmãos em torno desse propósito.",
  },
];

export default function Home() {
  const buttonClasses =
    "inline-flex min-h-[3.15rem] items-center justify-center rounded-[0.2rem] border border-transparent px-5 py-[0.85rem] text-[0.9rem] font-extrabold tracking-[0.04em] no-underline max-[620px]:w-full";

  return (
    <>
      <SiteHeader active="historia" />

      <main className="overflow-hidden">
        <section
          className="mx-auto grid min-h-[calc(100vh_-_82px)] w-[calc(100%_-_2rem)] max-w-[1180px] items-center gap-[clamp(2rem,6vw,6rem)] py-20 max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:pt-16 max-[620px]:py-14 min-[901px]:grid-cols-[minmax(0,1.04fr)_minmax(360px,0.96fr)]"
          aria-labelledby="hero-title"
        >
          <div>
            <Eyebrow>Uma história de fé e reencontro</Eyebrow>
            <h1
              className="mb-6 text-balance font-serif text-[clamp(3rem,7vw,6.8rem)] leading-[0.94] font-normal tracking-[-0.055em] after:mt-[0.2em] after:block after:h-[0.08em] after:w-[0.8em] after:bg-brand-red after:content-['']"
              id="hero-title"
            >
              Uma família unida aos pés da cruz.
            </h1>
            <p className="mb-8 max-w-2xl text-[clamp(1rem,1.5vw,1.2rem)] leading-7 text-[#c7c9ce]">
              Frattellianos nasceu de um sonho entre amigos e encontrou propósito na missão de
              aproximar pessoas de Cristo por meio de mensagens simples, verdadeiras e cheias de
              amor.
            </p>
            <div className="flex flex-wrap gap-[0.85rem] max-[620px]:w-full">
              <a
                className={joinClasses(buttonClasses, "bg-brand-red text-white hover:bg-[#ef3b36]")}
                href="#historia"
              >
                Conheça a história
              </a>
              <Link
                className={joinClasses(
                  buttonClasses,
                  "border-white/[0.14] hover:border-white/45",
                )}
                href="/mensagem"
              >
                Nossa mensagem
              </Link>
            </div>
          </div>

          <figure className="relative m-0 border border-brand-red/35 bg-[linear-gradient(145deg,rgba(227,49,44,0.35),rgba(255,255,255,0.03))] p-3 before:absolute before:-z-10 before:inset-[15%_-8%_-8%_20%] before:bg-brand-red before:opacity-[0.18] before:blur-[70px] before:content-[''] max-[900px]:max-w-[680px]">
            <img
              className="block aspect-[1.64] w-full object-cover"
              src="/images/logo-frattellianos.svg"
              alt="Símbolo Frattellianos: uma pessoa ajoelhada aos pés da cruz"
            />
          </figure>
        </section>

        <section
          className="grid scroll-mt-20 gap-[clamp(3rem,8vw,8rem)] bg-white px-[max(1rem,calc((100vw_-_1180px)/2))] py-[clamp(5rem,10vw,9rem)] text-brand-black max-[900px]:grid-cols-1 min-[901px]:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]"
          id="historia"
          aria-labelledby="story-title"
        >
          <div className="self-start min-[901px]:sticky min-[901px]:top-32">
            <Eyebrow>A história</Eyebrow>
            <h2
              className="mb-[1.4rem] text-balance font-serif text-[clamp(2.2rem,5vw,4.6rem)] leading-[1.02] font-normal tracking-[-0.045em]"
              id="story-title"
            >
              Um sonho antigo ganhou novo significado.
            </h2>
            <p className="text-base leading-7 text-[#5f6268]">
              No princípio, Frattellianos seria uma marca de comunicação. Com o tempo, tornou-se
              testemunho, comunidade e convite para caminhar junto.
            </p>
          </div>

          <ol className="m-0 list-none p-0">
            {chapters.map((chapter) => (
              <li
                className="grid grid-cols-[3rem_1fr] gap-5 border-t border-brand-black/20 py-8 last:border-b max-[620px]:grid-cols-1"
                key={chapter.number}
              >
                <span className="text-[0.8rem] font-extrabold tracking-[0.14em] text-brand-red">
                  {chapter.number}
                </span>
                <div>
                  <h3 className="mb-[0.7rem] text-balance font-serif text-[clamp(1.45rem,2.5vw,2rem)] font-normal">
                    {chapter.title}
                  </h3>
                  <p className="m-0 leading-7 text-[#56595e]">{chapter.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          className="mx-auto w-[calc(100%_-_2rem)] max-w-[920px] py-[clamp(5rem,10vw,9rem)] text-center"
          aria-labelledby="invitation-title"
        >
          <Eyebrow>O próximo capítulo</Eyebrow>
          <h2
            className="mb-[1.4rem] text-balance font-serif text-[clamp(2.2rem,5vw,4.6rem)] leading-[1.02] font-normal tracking-[-0.045em]"
            id="invitation-title"
          >
            Este caminho também pode ser seu.
          </h2>
          <p className="mx-auto mb-7 max-w-xl text-base leading-7 text-muted">
            Frattellianos segue construindo uma comunidade em que cada palavra, gesto e encontro
            apontam para Cristo.
          </p>
          <Link
            className="inline-flex items-center gap-[0.65rem] font-extrabold text-brand-red no-underline hover:text-[#ff4b46]"
            href="/mensagem"
          >
            Entenda o que queremos transmitir <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
