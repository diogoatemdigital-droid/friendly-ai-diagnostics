import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/landing/Header";
import {
  Hero,
  Features,
  SocialProof,
  Pricing,
  Faq,
  Footer,
} from "@/components/landing/Sections";
import { trackViewContent } from "@/lib/meta-pixel";

const title = "Diagnóstico AI — analise seu Instagram e LinkedIn por R$19,97";
const description =
  "Cole o link do seu Instagram ou LinkedIn e receba, em minutos, um relatório em PDF com pontos fortes, pontos fracos e um plano prático pra crescer.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    trackViewContent({
      content_name: "Diagnóstico AI - Landing Page",
      content_category: "landing_page",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <Pricing /> 
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
