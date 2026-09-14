import Link from "next/link";

import { Logo } from "@/components/ui/logo";
import { joinClasses } from "@/lib/utils";

type PublicRoute = "historia" | "mensagem";

export function SiteHeader({ active }: { active: PublicRoute }) {
  const linkClasses =
    "rounded-full px-4 py-[0.7rem] text-[0.9rem] font-bold tracking-[0.04em] text-muted no-underline hover:bg-surface-soft hover:text-white max-[620px]:px-3";

  return (
    <header className="sticky top-0 z-10 px-4 flex w-full items-center justify-between gap-8 border-b border-white/[0.14] bg-brand-black/85 py-5 backdrop-blur-2xl max-[620px]:py-[0.9rem]">
      <Logo />
      <nav className="flex items-center gap-[0.35rem]" aria-label="Navegação principal">
        <Link
          className={joinClasses(
            linkClasses,
            active === "historia" && "bg-surface-soft text-white",
          )}
          aria-current={active === "historia" ? "page" : undefined}
          href="/"
        >
          História
        </Link>
        <Link
          className={joinClasses(
            linkClasses,
            active === "mensagem" && "bg-surface-soft text-white",
          )}
          aria-current={active === "mensagem" ? "page" : undefined}
          href="/mensagem"
        >
          Mensagem
        </Link>
      </nav>
    </header>
  );
}
