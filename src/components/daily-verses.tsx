"use client";

import { useEffect, useMemo, useState } from "react";

import {
  createDailyVerseEntries,
  type DailyVerseEntry,
} from "@/lib/daily-verse-rotation";

function MainVerse({ entry }: { entry: DailyVerseEntry }) {
  return (
    <blockquote className="m-0 max-w-4xl">
      <p className="mb-8 text-balance font-serif text-[clamp(2rem,5vw,4rem)] leading-[1.15] tracking-tight text-white">
        “{entry.verse.text}”
      </p>
      <footer className="flex flex-wrap items-center justify-center gap-2 text-sm font-extrabold tracking-widest text-brand-red uppercase">
        <cite className="not-italic">{entry.verse.reference}</cite>
        <span aria-hidden="true">•</span>
        <span>{entry.verse.translation}</span>
      </footer>
    </blockquote>
  );
}

function OtherVerse({ entry }: { entry: DailyVerseEntry }) {
  return (
    <article className="flex h-full rounded-xl border border-white/15 bg-surface shadow-[0_18px_60px_rgba(0,0,0,0.14)]">
      <blockquote className="m-0 flex flex-1 flex-col p-6">
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

export function DailyVerses() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());

    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const entries = useMemo(
    () => (now ? createDailyVerseEntries(now) : []),
    [now],
  );
  const mainEntry = entries.find((entry) => entry.isToday);
  const otherEntries = entries.filter((entry) => !entry.isToday);

  return (
    <>
      <section
        className="mx-auto flex min-h-[calc(100svh-5.5rem)] w-full max-w-260 flex-col items-center justify-center py-16 text-center max-[620px]:min-h-[calc(100svh-7.3rem)]"
        aria-labelledby="word-title"
      >
        <h1
          className="mb-10 text-sm font-extrabold tracking-[0.18em] text-brand-red uppercase"
          id="word-title"
        >
          Palavra do dia
        </h1>

        <div aria-live="polite">
          {!mainEntry ? (
            <div className="h-72 w-[min(56rem,85vw)] animate-pulse rounded-xl bg-surface" />
          ) : (
            <MainVerse entry={mainEntry} />
          )}
        </div>
      </section>

      {otherEntries.length > 0 && (
        <section
          className="mx-auto w-full max-w-220 pb-[clamp(4rem,9vw,7rem)]"
          aria-labelledby="verses-title"
        >
          <h2
            className="mb-6 text-center font-serif text-[clamp(1.7rem,4vw,2.4rem)] font-normal"
            id="verses-title"
          >
            Versículos
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherEntries.map((entry) => (
              <OtherVerse entry={entry} key={entry.id} />
            ))}
          </div>
        </section>
      )}

      <p className="mx-auto mb-8 max-w-220 text-center text-xs leading-5 text-muted">
        Nova Almeida Atualizada © 2017 Sociedade Bíblica do Brasil.
      </p>
    </>
  );
}
