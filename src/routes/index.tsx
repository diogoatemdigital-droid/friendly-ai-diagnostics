import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/landing/Header";
import {
  Hero,
  HowItWorks,
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
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.975 0.015 250) 0%, oklch(1 0 0) 10%, #f7fbff 22%, #f7fbff 42%, #f9fcff 58%, #fbfdff 74%, #eef6ff 90%, #ffffff 100%)",
      }}
    >
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <SocialProof />
        <Pricing /> 
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
