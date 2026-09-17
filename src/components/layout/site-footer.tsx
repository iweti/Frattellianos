import Link from "next/link";

import { Logo } from "@/components/ui/logo";

const linkClasses =
  "w-fit text-muted no-underline transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red";

const socialLinkClasses =
  "inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand-red hover:bg-brand-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red";

function InstagramIcon() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.8-.1-1.6-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2V10H7.8v3h2.7v8h3.2Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      className="size-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M21 12c0-2.2-.2-3.7-.5-4.5a2.7 2.7 0 0 0-1.9-1.9C17.4 5.2 15.2 5 12 5s-5.4.2-6.6.6a2.7 2.7 0 0 0-1.9 1.9C3.2 8.3 3 9.8 3 12s.2 3.7.5 4.5a2.7 2.7 0 0 0 1.9 1.9c1.2.4 3.4.6 6.6.6s5.4-.2 6.6-.6a2.7 2.7 0 0 0 1.9-1.9c.3-.8.5-2.3.5-4.5Z" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="mt-0.5 size-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      className="mt-0.5 size-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
      <path d="M8.5 9.5h7M8.5 13h4.5" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="mt-0.5 size-5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/15 bg-brand-black px-4 py-12 text-sm text-muted sm:py-16">
      <div className="mx-auto w-full max-w-295">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <Logo size={64} compact={false} />
          <nav className="flex items-center gap-3" aria-label="Redes sociais">
            <a
              className={socialLinkClasses}
              href="https://www.instagram.com/frattellianos/"
              aria-label="Instagram — link em breve"
              title="Instagram"
            >
              <InstagramIcon />
            </a>
            {/* <a
              className={socialLinkClasses}
              href="#"
              aria-label="Facebook — link em breve"
              title="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              className={socialLinkClasses}
              href="#"
              aria-label="YouTube — link em breve"
              title="YouTube"
            >
              <YoutubeIcon />
            </a> */}
          </nav>
        </div>

        <div className="my-9 h-px bg-white/15 sm:my-11" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[0.9fr_1fr_1fr_1.4fr] lg:gap-12">
          <nav aria-labelledby="footer-navigation-title">
            <h2
              className="mb-5 text-xs font-extrabold tracking-[0.16em] text-white uppercase"
              id="footer-navigation-title"
            >
              Mapa do site
            </h2>
            <ul className="m-0 grid list-none gap-3 p-0">
              <li>
                <Link className={linkClasses} href="/historia">
                  História
                </Link>
              </li>
              <li>
                <Link className={linkClasses} href="/mensagem">
                  Missão
                </Link>
              </li>
              <li>
                <Link className={linkClasses} href="/palavra">
                  Palavra
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-legal-title">
            <h2
              className="mb-5 text-xs font-extrabold tracking-[0.16em] text-white uppercase"
              id="footer-legal-title"
            >
              Legal
            </h2>
            <ul className="m-0 grid list-none gap-3 p-0">
              <li>
                <a
                  className={linkClasses}
                  href="#"
                  aria-label="Política de privacidade — link em breve"
                >
                  Política de privacidade
                </a>
              </li>
              <li>
                <a
                  className={linkClasses}
                  href="#"
                  aria-label="Termos de uso — link em breve"
                >
                  Termos de uso
                </a>
              </li>
            </ul>
          </nav>

          <section aria-labelledby="footer-service-title">
            <h2
              className="mb-5 text-xs font-extrabold tracking-[0.16em] text-white uppercase"
              id="footer-service-title"
            >
              Atendimento
            </h2>
            <p className="m-0 max-w-48 leading-6">
              Dias e horários de atendimento serão informados em breve.
            </p>
          </section>

          <nav aria-labelledby="footer-contact-title">
            <h2
              className="mb-5 text-xs font-extrabold tracking-[0.16em] text-white uppercase"
              id="footer-contact-title"
            >
              Contato
            </h2>
            <ul className="m-0 grid list-none gap-4 p-0">
              <li>
                <a
                  className={`${linkClasses} flex items-start gap-3`}
                  href="https://www.instagram.com/frattellianos/"
                  aria-label="Instagram — link em breve"
                >
                  <InstagramIcon />
                  <span>Instagram</span>
                </a>
              </li>
              {/* <li>
                <a
                  className={`${linkClasses} flex items-start gap-3`}
                  href="#"
                  aria-label="E-mail — link em breve"
                >
                  <MailIcon />
                  <span>E-mail de contato</span>
                </a>
              </li>
              <li>
                <a
                  className={`${linkClasses} flex items-start gap-3`}
                  href="#"
                  aria-label="WhatsApp — link em breve"
                >
                  <MessageIcon />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  className={`${linkClasses} flex items-start gap-3`}
                  href="#"
                  aria-label="Localização — link em breve"
                >
                  <LocationIcon />
                  <span>Localização</span>
                </a>
              </li> */}
            </ul>
          </nav>
        </div>

        <div className="mt-11 flex flex-col gap-3 border-t border-white/15 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">Fé que aproxima. Amor que serve.</p>
          <p className="m-0">
            Frattellianos © {new Date().getFullYear()} · Desenvolvido por IWETI
          </p>
        </div>
      </div>
    </footer>
  );
}
