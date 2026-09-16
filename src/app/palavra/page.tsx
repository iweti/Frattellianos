import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { MessageFeed } from "@/components/message-feed";

export const metadata: Metadata = {
  title: "Palavra",
  description:
    "Palavra do dia e versículos bíblicos na Nova Almeida Atualizada.",
};

export default function WordPage() {
  return (
    <>
      <SiteHeader active="palavra" />

      <main className="overflow-hidden px-4">
        <MessageFeed />
      </main>

      <SiteFooter />
    </>
  );
}
