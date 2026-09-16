import Link from "next/link";
import Image from "next/image";

export function Logo({ compact = false, width, height, size }: { compact?: boolean; width: number; height: number; size: string }) {
  return (
    <Link
      className="inline-flex items-center gap-3 font-serif text-[1.1rem] text-white italic no-underline"
      href="/"
      aria-label="Frattellianos — página inicial"
    >
      <Image
        className={`block ${size} object-contain`}
        src="/icons/9.png"
        width={width}
        height={height}
        alt="Frattellianos"
        priority
      />
      {!compact && <span className="max-[620px]:hidden">Frattellianos</span>}
    </Link>
  );
}
