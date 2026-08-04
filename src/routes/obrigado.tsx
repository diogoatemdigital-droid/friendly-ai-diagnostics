import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const title = "Compra confirmada! Vamos começar seu diagnóstico. — Diagnóstico AI";
const description = "Obrigado por adquirir o Diagnóstico.ai. Para iniciarmos sua análise personalizada, precisamos de algumas informações sobre seu perfil.";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Obrigado,
});

function Obrigado() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Purchase", { currency: "BRL", value: 19.97 });
    }
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.975 0.015 250) 0%, oklch(1 0 0) 10%, #f7fbff 22%, #f7fbff 42%, #f9fcff 58%, #fbfdff 74%, #eef6ff 90%, #ffffff 100%)",
      }}
    >
      <div className="max-w-md w-full text-center rounded-2xl border border-border bg-white/80 backdrop-blur-sm p-8 shadow-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">
          Compra confirmada! Vamos começar seu diagnóstico.
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Obrigado por adquirir o Diagnóstico.ai. Para iniciarmos sua análise personalizada,
          precisamos de algumas informações sobre seu perfil.
        </p>

        <div className="mt-6 rounded-xl bg-primary/5 p-4 text-left">
          <h2 className="text-sm font-semibold text-foreground">Próximos passos</h2>
          <ol className="mt-2 space-y-1.5 text-sm text-muted-foreground">
            <li>1. Preencha o formulário com suas informações.</li>
            <li>2. Nossa equipe analisará seu Instagram ou LinkedIn.</li>
            <li>3. Você receberá seu diagnóstico personalizado.</li>
          </ol>
        </div>

        <Button asChild className="mt-6 w-full">
          {/* TODO: substituir "#" pelo link do Google Forms quando disponível */}
          <a href="#">Preencher meu diagnóstico</a>
        </Button>
      </div>
    </div>
  );
}
