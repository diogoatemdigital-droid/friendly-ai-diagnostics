import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const title = "Obrigado pela sua compra! — Diagnóstico AI";
const description = "Seu pagamento foi confirmado. Em instantes você receberá seu diagnóstico por e-mail.";

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
        <h1 className="text-2xl font-bold text-foreground">Pagamento confirmado!</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Obrigado pela sua compra. Em instantes você receberá seu diagnóstico completo por
          e-mail. Verifique também sua caixa de spam.
        </p>
        <Button asChild className="mt-6 w-full">
          <Link to="/">Voltar para a página inicial</Link>
        </Button>
      </div>
    </div>
  );
}
