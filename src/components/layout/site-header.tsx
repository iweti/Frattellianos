import Image from "next/image";
import Link from "next/link";

import { joinClasses } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

type PublicRoute = "historia" | "palavra" | "missao";

export function SiteHeader({ active }: { active: PublicRoute }) {
  const linkClasses =
    "rounded-full px-4 py-[0.7rem] text-[0.9rem] font-bold tracking-[0.04em] text-muted no-underline hover:bg-surface-soft hover:text-white max-[620px]:px-2 max-[620px]:text-[0.78rem]";

  return (
    <header className="sticky top-0 z-10 px-4 flex w-full items-center justify-between gap-8 border-b border-white/[0.14] bg-brand-black/85 backdrop-blur-2xl max-[620px]:py-[0.9rem]">
      <div className="mx-auto flex w-full max-w-295 items-center justify-between gap-8 max-[620px]:gap-2">
        <Logo compact={false} size={88} preload />
        <nav
          className="flex items-center gap-[0.35rem]"
          aria-label="Navegação principal"
        >
          <Link
            className={joinClasses(
              linkClasses,
              active === "historia" && "bg-surface-soft text-white",
            )}
            aria-current={active === "historia" ? "page" : undefined}
            href="/historia"
          >
            História
          </Link>
          <Link
            className={joinClasses(
              linkClasses,
              active === "missao" && "bg-surface-soft text-white",
            )}
            aria-current={active === "missao" ? "page" : undefined}
            href="/mensagem"
          >
            Missão
          </Link>
          <Link
            className={joinClasses(
              linkClasses,
              active === "palavra" && "bg-surface-soft text-white",
            )}
            aria-current={active === "palavra" ? "page" : undefined}
            href="/palavra"
          >
            Palavra
          </Link>
        </nav>
      </div>
    </header>
  );
}
