"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { createDailyFeed, type DailyFeedEntry } from "@/lib/daily-feed";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function BrandAvatar({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-brand-black ${
        compact ? "size-9" : "size-11"
      }`}
    >
      <Image
        className={`${compact ? "size-7" : "size-9"} object-contain`}
        src="/icons/frattellianos-mark-white.png"
        width={40}
        height={40}
        alt=""
      />
    </span>
  );
}

function FeaturedDailyCard({ entry }: { entry: DailyFeedEntry }) {
  const date = new Date(`${entry.dateKey}T12:00:00.000Z`);

  return (
    <article className="overflow-hidden rounded-xl border border-brand-red/70 bg-surface shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
      <header className="flex items-center gap-3 border-b border-white/10 px-5 py-4 max-[620px]:px-4">
        <BrandAvatar />
        <div className="min-w-0">
          <p className="m-0 text-sm text-muted">
            <strong className="font-bold text-white">Frattellianos</strong>{" "}
            publicou uma mensagem
          </p>
          <time className="text-xs text-muted" dateTime={entry.dateKey}>
            {dateFormatter.format(date)}
          </time>
        </div>
        <span className="ml-auto rounded-full bg-brand-red px-3 py-1 text-[0.68rem] font-extrabold tracking-[0.12em] text-white uppercase">
          Hoje
        </span>
      </header>

      <blockquote className="m-0 px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(2rem,5vw,3.5rem)]">
        <p className="mb-6 text-balance font-serif text-[clamp(1.65rem,4vw,3rem)] leading-[1.18] tracking-tight text-white">
          “{entry.verse.text}”
        </p>
        <footer className="flex flex-wrap items-center gap-2 text-sm font-extrabold tracking-widest text-brand-red uppercase">
          <cite className="not-italic">{entry.verse.reference}</cite>
          <span aria-hidden="true">•</span>
          <span>{entry.verse.translation}</span>
        </footer>
      </blockquote>
    </article>
  );
}

function CompactDailyCard({ entry }: { entry: DailyFeedEntry }) {
  const date = new Date(`${entry.dateKey}T12:00:00.000Z`);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-white/15 bg-surface shadow-[0_18px_60px_rgba(0,0,0,0.14)]">
      <header className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <BrandAvatar compact />
        <div className="min-w-0">
          <p className="m-0 text-xs font-bold text-white">Frattellianos</p>
          <time className="text-[0.7rem] text-muted" dateTime={entry.dateKey}>
            {dateFormatter.format(date)}
          </time>
        </div>
      </header>

      <blockquote className="m-0 flex flex-1 flex-col px-4 py-5">
        <p className="mb-5 flex-1 font-serif text-[clamp(1.15rem,2vw,1.4rem)] leading-[1.35] text-white">
          “{entry.verse.text}”
        </p>
        <footer className="flex flex-wrap items-center gap-1.5 text-[0.68rem] font-extrabold tracking-wider text-brand-red uppercase">
          <cite className="not-italic">{entry.verse.reference}</cite>
          <span aria-hidden="true">•</span>
          <span>{entry.verse.translation}</span>
        </footer>
      </blockquote>
    </article>
  );
}

export function MessageFeed() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());

    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const entries = useMemo(() => (now ? createDailyFeed(now) : []), [now]);
  const featuredEntry = entries.find((entry) => entry.isToday);
  const previousEntries = entries.filter((entry) => !entry.isToday);

  return (
    <>
      <div className="mb-5 flex items-end justify-between gap-4">
        <h2 className="font-serif text-[clamp(1.7rem,4vw,2.4rem)] font-normal">
          Palavra de hoje
        </h2>
        <p className="m-0 text-sm text-muted">
          Uma nova mensagem todos os dias
        </p>
      </div>

      <div aria-live="polite">
        {!featuredEntry ? (
          <div className="h-72 animate-pulse rounded-xl border border-white/10 bg-surface" />
        ) : (
          <FeaturedDailyCard entry={featuredEntry} />
        )}

        {previousEntries.length > 0 && (
          <section className="mt-12" aria-labelledby="previous-days-title">
            <div className="mb-5 flex items-end justify-between gap-4">
              <h2
                className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-normal"
                id="previous-days-title"
              >
                Últimos dias
              </h2>
              <p className="m-0 text-sm text-muted">
                As seis palavras anteriores
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {previousEntries.map((entry) => (
                <CompactDailyCard entry={entry} key={entry.id} />
              ))}
            </div>
          </section>
        )}
      </div>

      <p className="mt-8 text-center text-xs leading-5 text-muted">
        Textos bíblicos na Nova Versão Internacional (NVI).
      </p>
    </>
  );
}
