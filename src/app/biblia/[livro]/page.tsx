import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { bibleBooks } from "@/content/bible-books";

type BibleBookPageProps = {
  params: Promise<{ livro: string }>;
};

export function generateStaticParams() {
  return bibleBooks.map((book) => ({ livro: book.slug }));
}

export async function generateMetadata({
  params,
}: BibleBookPageProps): Promise<Metadata> {
  const { livro } = await params;
  const book = bibleBooks.find((item) => item.slug === livro);

  return {
    title: book ? `${book.name} | Bíblia` : "Livro não encontrado",
  };
}

export default async function BibleBookPage({ params }: BibleBookPageProps) {
  const { livro } = await params;
  const book = bibleBooks.find((item) => item.slug === livro);

  if (!book) notFound();

  return (
    <>
      <SiteHeader active="biblia" />

      <main className="min-h-[calc(100svh-69px)] px-4 py-[clamp(3rem,7vw,6rem)] max-[620px]:min-h-[calc(100svh-98px)]">
        <section
          className="mx-auto w-full max-w-260"
          aria-labelledby="chapters-title"
        >
          <Link
            className="mb-8 inline-flex rounded-md text-sm font-bold text-brand-red no-underline hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
            href="/biblia"
          >
            ← Todos os livros
          </Link>

          <p className="mb-3 text-center text-sm font-extrabold tracking-[0.18em] text-brand-red uppercase">
            {book.name}
          </p>
          <h1
            className="mb-10 text-center font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-normal"
            id="chapters-title"
          >
            Capítulos
          </h1>

          <ol className="m-0 grid list-none grid-cols-4 gap-4 p-0 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
            {Array.from({ length: book.chapters }, (_, index) => (
              <li
                className="grid aspect-square place-items-center rounded-2xl border border-white/10 bg-[#10182b] text-xl font-bold text-white"
                key={index + 1}
                aria-label={`${book.name}, capítulo ${index + 1}`}
              >
                {index + 1}
              </li>
            ))}
          </ol>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
