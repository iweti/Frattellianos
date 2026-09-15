import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Frattellianos",
    template: "%s | Frattellianos",
  },
  description:
    "Uma comunidade cristã criada para comunicar o evangelho com simplicidade, amor e propósito.",
  icons: {
    icon: "/icons/frattellianos-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className="scroll-smooth scheme-dark motion-reduce:scroll-auto"
    >
      <body className="min-h-screen bg-brand-black bg-[radial-gradient(circle_at_80%_8%,rgba(227,49,44,0.14),transparent_28rem)] font-sans text-white">
        {children}
      </body>
    </html>
  );
}
