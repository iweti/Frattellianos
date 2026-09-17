import Link from "next/link";
import Image from "next/image";
import { Allura } from "next/font/google";

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
});

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
      className="inline-flex py-1 w-fit items-center gap-3 font-serif text-[1.1rem] text-white italic no-underline"
      href="/historia"
      aria-label="Frattellianos - logo"
    >
      <Image
        className="block object-contain"
        src="/icons/9-cropped.png"
        width={2310}
        height={1410}
        sizes={`${size}px`}
        style={{ width: size, height: size }}
        alt="Frattellianos"
        priority
      />
      {!compact && (
        <span className={`${allura.className} pt-2 align-bottom text-4xl max-[620px]:hidden not-italic`}>
          Frattellianos
        </span>
      )}
    </Link>
  );
}
