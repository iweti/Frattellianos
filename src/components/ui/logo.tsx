import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      className="inline-flex items-center gap-3 font-serif text-[1.1rem] text-white italic no-underline"
      href="/"
      aria-label="Frattellianos — página inicial"
    >
      <img
        className="block size-[2.6rem] object-cover"
        src="/icons/frattellianos-mark.png"
        alt=""
      />
      {!compact && <span className="max-[620px]:hidden">Frattellianos</span>}
    </Link>
  );
}
