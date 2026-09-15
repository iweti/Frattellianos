import { Logo } from "@/components/ui/logo";

export function SiteFooter() {
  return (
    <footer className="mx-auto items-center gap-4 border-t border-white/[0.14] py-8 text-center text-[0.85rem] text-muted min-[621px]:grid-cols-[auto_1fr] min-[901px]:grid-cols-[1fr_auto_1fr]">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1180px] grid-cols-1 items-center gap-4 text-center text-[0.85rem] text-muted min-[621px]:grid-cols-[auto_1fr] min-[901px]:grid-cols-[1fr_auto_1fr]">
        <Logo compact />
        <p className="m-0 min-[621px]:text-right min-[901px]:text-center">
          Fé que aproxima. Amor que serve.
        </p>
        <p className="m-0 min-[621px]:col-span-2 min-[901px]:col-span-1 min-[901px]:text-right">
          Frattellianos © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
