import { Eyebrow } from "@/components/ui/eyebrow";

export default function DashboardPage() {
  return (
    <section className="max-w-[760px]">
      <Eyebrow>Painel</Eyebrow>
      <h1 className="mb-[0.67em] text-balance font-serif text-[clamp(2.2rem,6vw,4rem)] leading-none font-normal">
        Visão geral
      </h1>
      <p className="text-base leading-7 text-muted">
        Base administrativa pronta para receber funcionalidades futuras.
      </p>
    </section>
  );
}
