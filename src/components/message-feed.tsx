"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";

import { createDailyFeed, type DailyFeedEntry } from "@/lib/daily-feed";

const storageKey = "frattellianos:local-messages:v1";
const maxMessageLength = 1000;

type LocalMessage = {
  id: string;
  text: string;
  createdAt: string;
};

type FeedItem =
  | { kind: "daily"; sortValue: number; entry: DailyFeedEntry }
  | { kind: "local"; sortValue: number; entry: LocalMessage };

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const dateTimeFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "America/Sao_Paulo",
});

function readLocalMessages(): LocalMessage[] {
  try {
    const stored = window.localStorage.getItem(storageKey);
    if (!stored) return [];

    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is LocalMessage =>
        typeof item === "object" &&
        item !== null &&
        typeof item.id === "string" &&
        typeof item.text === "string" &&
        typeof item.createdAt === "string",
    );
  } catch {
    return [];
  }
}

function saveLocalMessages(messages: LocalMessage[]) {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(messages));
  } catch {
    // The feed remains usable for the current session if storage is unavailable.
  }
}

function BrandAvatar() {
  return (
    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-brand-black">
      <Image
        className="size-9 object-contain"
        src="/icons/frattellianos-mark-white.png"
        width={40}
        height={40}
        alt=""
      />
    </span>
  );
}

function DailyCard({ entry }: { entry: DailyFeedEntry }) {
  const date = new Date(`${entry.dateKey}T12:00:00.000Z`);

  return (
    <article
      className={`overflow-hidden rounded-xl border bg-surface shadow-[0_18px_60px_rgba(0,0,0,0.18)] ${
        entry.isToday ? "border-brand-red/70" : "border-white/[0.14]"
      }`}
    >
      <header className="flex items-center gap-3 border-b border-white/[0.1] px-5 py-4 max-[620px]:px-4">
        <BrandAvatar />
        <div className="min-w-0">
          <p className="m-0 text-sm text-muted">
            <strong className="font-bold text-white">Frattellianos</strong> publicou uma mensagem
          </p>
          <time className="text-xs text-muted" dateTime={entry.dateKey}>
            {dateFormatter.format(date)}
          </time>
        </div>
        {entry.isToday && (
          <span className="ml-auto rounded-full bg-brand-red px-3 py-1 text-[0.68rem] font-extrabold tracking-[0.12em] text-white uppercase">
            Hoje
          </span>
        )}
      </header>

      <blockquote className="m-0 px-[clamp(1.25rem,4vw,2.5rem)] py-[clamp(2rem,5vw,3.5rem)]">
        <p className="mb-6 text-balance font-serif text-[clamp(1.65rem,4vw,3rem)] leading-[1.18] tracking-[-0.025em] text-white">
          “{entry.verse.text}”
        </p>
        <footer className="flex flex-wrap items-center gap-2 text-sm font-extrabold tracking-[0.1em] text-brand-red uppercase">
          <cite className="not-italic">{entry.verse.reference}</cite>
          <span aria-hidden="true">•</span>
          <span>{entry.verse.translation}</span>
        </footer>
      </blockquote>
    </article>
  );
}

function LocalCard({ message }: { message: LocalMessage }) {
  return (
    <article className="overflow-hidden rounded-xl border border-white/[0.14] bg-surface shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
      <header className="flex items-center gap-3 border-b border-white/[0.1] px-5 py-4 max-[620px]:px-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/[0.08] font-serif text-lg italic text-white">
          V
        </span>
        <div>
          <p className="m-0 text-sm text-muted">
            <strong className="font-bold text-white">Você</strong> publicou uma mensagem local
          </p>
          <time className="text-xs text-muted" dateTime={message.createdAt}>
            {dateTimeFormatter.format(new Date(message.createdAt))}
          </time>
        </div>
      </header>
      <p className="m-0 whitespace-pre-wrap px-[clamp(1.25rem,4vw,2.5rem)] py-8 text-[clamp(1.05rem,2vw,1.25rem)] leading-8 text-[#e2e4e8]">
        {message.text}
      </p>
    </article>
  );
}

export function MessageFeed() {
  const [draft, setDraft] = useState("");
  const [now, setNow] = useState<Date | null>(null);
  const [localMessages, setLocalMessages] = useState<LocalMessage[]>([]);

  useEffect(() => {
    setNow(new Date());
    setLocalMessages(readLocalMessages());

    const timer = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const items = useMemo<FeedItem[]>(() => {
    if (!now) return [];

    const dailyItems: FeedItem[] = createDailyFeed(now).map((entry) => ({
      kind: "daily",
      entry,
      sortValue: entry.dayNumber * 86_400_000,
    }));
    const localItems: FeedItem[] = localMessages.map((entry) => ({
      kind: "local",
      entry,
      sortValue: Date.parse(entry.createdAt),
    }));

    return [...dailyItems, ...localItems].sort((a, b) => b.sortValue - a.sortValue);
  }, [localMessages, now]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    const message: LocalMessage = {
      id: typeof crypto.randomUUID === "function" ? crypto.randomUUID() : String(Date.now()),
      text,
      createdAt: new Date().toISOString(),
    };
    const nextMessages = [message, ...localMessages];

    setLocalMessages(nextMessages);
    saveLocalMessages(nextMessages);
    setDraft("");
    setNow(new Date());
  }

  return (
    <>
      <form
        className="mb-12 overflow-hidden rounded-xl border border-white/[0.18] bg-surface shadow-[0_18px_60px_rgba(0,0,0,0.22)] focus-within:border-brand-red/70"
        onSubmit={handleSubmit}
      >
        <label className="sr-only" htmlFor="local-message">
          Escreva uma mensagem
        </label>
        <textarea
          className="block min-h-32 w-full resize-y bg-transparent px-5 py-5 text-base leading-7 text-white outline-none placeholder:text-muted max-[620px]:min-h-28 max-[620px]:px-4"
          id="local-message"
          maxLength={maxMessageLength}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Escreva uma mensagem..."
          value={draft}
        />
        <div className="flex items-center justify-between gap-4 border-t border-white/[0.1] px-4 py-3">
          <span className="text-xs text-muted">Salva apenas neste navegador</span>
          <button
            className="inline-flex min-h-10 items-center justify-center rounded-md bg-brand-red px-5 text-sm font-extrabold text-white transition-colors hover:bg-[#ef3b36] disabled:cursor-not-allowed disabled:opacity-40"
            disabled={!draft.trim()}
            type="submit"
          >
            Enviar mensagem
          </button>
        </div>
      </form>

      <div className="mb-5 flex items-end justify-between gap-4">
        <h2 className="font-serif text-[clamp(1.7rem,4vw,2.4rem)] font-normal">Publicações</h2>
        <p className="m-0 text-sm text-muted">Uma nova mensagem todos os dias</p>
      </div>

      <div className="grid gap-5" aria-live="polite">
        {!now ? (
          <div className="h-72 animate-pulse rounded-xl border border-white/[0.1] bg-surface" />
        ) : (
          items.map((item) =>
            item.kind === "daily" ? (
              <DailyCard entry={item.entry} key={item.entry.id} />
            ) : (
              <LocalCard message={item.entry} key={item.entry.id} />
            ),
          )
        )}
      </div>

      <p className="mt-8 text-center text-xs leading-5 text-muted">
        Textos bíblicos na Nova Versão Internacional (NVI).
      </p>
    </>
  );
}
