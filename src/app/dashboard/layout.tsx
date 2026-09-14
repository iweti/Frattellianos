import Link from "next/link";
import type { ReactNode } from "react";

import { Logo } from "@/components/ui/logo";

export default function DashboardLayout({ children }: Readonly<{ children: ReactNode }>) {
  const navLinkClasses = "p-3 text-muted no-underline hover:bg-surface-soft hover:text-white";

  return (
    <div className="grid min-h-screen grid-cols-1 min-[621px]:grid-cols-[260px_1fr]">
      <aside className="border-b border-white/[0.14] bg-surface p-8 min-[621px]:border-r min-[621px]:border-b-0">
        <Logo />
        <nav className="mt-6 grid gap-[0.35rem] min-[621px]:mt-12" aria-label="Navegação do painel">
          <Link className={navLinkClasses} href="/dashboard">
            Visão geral
          </Link>
          <Link className={navLinkClasses} href="/dashboard/users">
            Usuários
          </Link>
          <Link className={navLinkClasses} href="/dashboard/settings">
            Configurações
          </Link>
        </nav>
      </aside>
      <main className="overflow-hidden p-[clamp(2rem,6vw,5rem)]">{children}</main>
    </div>
  );
}
