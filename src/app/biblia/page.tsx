import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Eyebrow } from "@/components/ui/eyebrow";
import {
  newTestamentBooks,
  oldTestamentBooks,
  type BibleBook,
} from "@/content/bible-books";

export const metadata: Metadata = {
  title: "Bíblia",
  description: "Consulte os livros e capítulos da Bíblia.",
};

function TestamentPanel({
  id,
  title,
  books,
}: {
  id: string;
  title: string;
  books: readonly BibleBook[];
}) {
  return (
    <section
      className="rounded-3xl border border-white/10 bg-[#10182b] p-[clamp(1.5rem,4vw,2.75rem)]"
      aria-labelledby={id}
    >
      <h2 className="mb-5 text-2xl font-bold text-white" id={id}>
        {title}
      </h2>
      <ul className="m-0 grid list-none grid-cols-2 gap-x-5 p-0 sm:grid-cols-3 sm:gap-x-8">
        {books.map((book) => (
          <li key={book.slug}>
            <Link
              className="block rounded-md py-2 text-base text-[#c7c9d2] no-underline transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red sm:text-lg"
              href={`/biblia/${book.slug}`}
            >
              {book.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function BiblePage() {
  return (
    <>
      <SiteHeader active="biblia" />

      <main className="px-4 py-[clamp(4rem,8vw,7rem)]">
        <section
          className="mx-auto w-full max-w-295"
          aria-labelledby="bible-title"
        >
          <div className="mb-10 max-w-3xl">
            <div className="[&>p]:text-sm!">
              <Eyebrow>Explore as Escrituras</Eyebrow>
            </div>
            <h1
              className="mb-4 font-serif text-[clamp(3rem,7vw,5.5rem)] leading-none font-normal tracking-tighter"
              id="bible-title"
            >
              Bíblia
            </h1>
            <p className="m-0 text-[clamp(1rem,1.5vw,1.15rem)] leading-7 text-[#c7c9ce]">
              Escolha um livro para consultar seus capítulos.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <TestamentPanel
              books={oldTestamentBooks}
              id="old-testament-title"
              title="Antigo Testamento"
            />
            <TestamentPanel
              books={newTestamentBooks}
              id="new-testament-title"
              title="Novo Testamento"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
