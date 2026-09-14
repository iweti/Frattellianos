import { Eyebrow } from "@/components/ui/eyebrow";

export default function SettingsPage() {
  return (
    <section className="max-w-[760px]">
      <Eyebrow>Painel</Eyebrow>
      <h1 className="mb-[0.67em] text-balance font-serif text-[clamp(2.2rem,6vw,4rem)] leading-none font-normal">
        Configurações
      </h1>
      <p className="text-base leading-7 text-muted">
        Configurações serão adicionadas conforme regras do projeto forem definidas.
      </p>
    </section>
  );
}
