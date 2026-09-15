import Link from "next/link";
import Image from "next/image";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      className="inline-flex items-center gap-3 font-serif text-[1.1rem] text-white italic no-underline"
      href="/"
      aria-label="Frattellianos — página inicial"
    >
      <Image
        className="block size-16 object-contain"
        src="/icons/frattellianos-mark-white.png"
        width={512}
        height={512}
        alt=""
      />
      {!compact && <span className="max-[620px]:hidden">Frattellianos</span>}
    </Link>
  );
}
