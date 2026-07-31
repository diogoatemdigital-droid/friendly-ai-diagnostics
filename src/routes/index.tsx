import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { FloatingCta } from "@/components/landing/FloatingCta";
import {
  Hero,
  ColorJourney,
  Depoimentos,
  FinalCta,
  Footer,
} from "@/components/landing/Sections";

const title = "Diagnóstico AI — analise seu LinkedIn e Instagram com IA";
const description =
  "Receba um diagnóstico completo do seu perfil feito por inteligência artificial, com um plano prático de ação para conquistar mais oportunidades em minutos.";

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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ColorJourney />
        <Depoimentos />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
