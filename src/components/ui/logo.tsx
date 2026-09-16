import Link from "next/link";
import Image from "next/image";

export function Logo({
  compact = false,
  size,
  preload = false,
}: {
  compact?: boolean;
  size: number;
  preload?: boolean;
}) {
  return (
    <Link
      className="inline-flex items-center gap-3 font-serif text-[1.1rem] text-white italic no-underline"
      href="/historia"
      aria-label="Frattellianos - logo"
    >
      <Image
        className="block object-contain"
        src="/icons/9.png"
        width={2310}
        height={1410}
        sizes={`${size}px`}
        style={{ width: size, height: size }}
        alt="Frattellianos"
        priority 
      />
      {!compact && <span className="max-[620px]:hidden">Frattellianos</span>}
    </Link>
  );
}
