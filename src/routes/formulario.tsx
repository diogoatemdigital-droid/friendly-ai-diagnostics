import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const title = "Formulário do diagnóstico — Diagnóstico AI";
const description =
  "Preencha suas informações para iniciarmos sua análise personalizada.";

export const Route = createFileRoute("/formulario")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: Formulario,
});

const WEBHOOK_URL = import.meta.env.VITE_DIAGNOSTICO_WEBHOOK_URL as
  | string
  | undefined;

type SubmitStatus = "idle" | "loading" | "success" | "error";

function Formulario() {
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!WEBHOOK_URL) {
      console.warn(
        "VITE_DIAGNOSTICO_WEBHOOK_URL não está configurada. O formulário não enviará os dados ainda.",
      );
      setStatus("error");
      setErrorMessage(
        "Envio ainda não configurado. Tente novamente mais tarde.",
      );
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    try {
      const formData = new FormData(e.currentTarget);

      // O Google Apps Script não retorna cabeçalhos CORS legíveis pelo
      // navegador, então usamos "no-cors": a requisição chega normalmente
      // ao script, mas a resposta vem opaca e não pode ser inspecionada.
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setStatus("success");
      e.currentTarget.reset();
      setProfilePreview(null);
    } catch (error) {
      console.error("Falha ao enviar formulário para o webhook:", error);
      setStatus("error");
      setErrorMessage(
        "Não foi possível enviar suas informações. Tente novamente em instantes.",
      );
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.975 0.015 250) 0%, oklch(1 0 0) 10%, #f7fbff 22%, #f7fbff 42%, #f9fcff 58%, #fbfdff 74%, #eef6ff 90%, #ffffff 100%)",
      }}
    >
      <div className="max-w-xl w-full rounded-2xl border border-border bg-white/80 backdrop-blur-sm p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-foreground">Vamos conhecer seu perfil</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Preencha as informações abaixo para iniciarmos sua análise personalizada.
        </p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="nome">Nome completo</Label>
            <Input id="nome" name="nome" placeholder="Seu nome completo" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" placeholder="voce@email.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input id="whatsapp" name="whatsapp" placeholder="(00) 00000-0000" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="diagnostico">Qual diagnóstico você comprou?</Label>
            <Select name="diagnostico">
              <SelectTrigger id="diagnostico">
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="instagram">Diagnóstico Instagram</SelectItem>
                <SelectItem value="linkedin">Diagnóstico LinkedIn</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="link-perfil">Link do perfil que será analisado</Label>
            <Input
              id="link-perfil"
              name="link-perfil"
              placeholder="https://instagram.com/seuperfil"
            />
          </div>

          <div className="space-y-2">
            <Label>Plataforma</Label>
            <RadioGroup name="plataforma" className="flex gap-6">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="instagram" id="plataforma-instagram" />
                <Label htmlFor="plataforma-instagram" className="font-normal">
                  Instagram
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="linkedin" id="plataforma-linkedin" />
                <Label htmlFor="plataforma-linkedin" className="font-normal">
                  LinkedIn
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="profissao">Profissão / Área de atuação</Label>
            <Input id="profissao" name="profissao" placeholder="Ex: Advogado, Designer, Coach..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="objetivo">Qual seu principal objetivo?</Label>
            <Select name="objetivo">
              <SelectTrigger id="objetivo">
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="atrair-clientes">Atrair clientes</SelectItem>
                <SelectItem value="conseguir-emprego">Conseguir emprego</SelectItem>
                <SelectItem value="melhorar-autoridade">
                  Melhorar autoridade profissional
                </SelectItem>
                <SelectItem value="aumentar-seguidores">Aumentar seguidores</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dificuldade">Qual sua maior dificuldade atualmente?</Label>
            <Textarea
              id="dificuldade"
              name="dificuldade"
              placeholder="Conte um pouco sobre sua maior dificuldade"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="resultado-90-dias">
              Qual resultado você espera alcançar nos próximos 90 dias?
            </Label>
            <Textarea
              id="resultado-90-dias"
              name="resultado-90-dias"
              placeholder="Descreva o resultado esperado"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="print-perfil">Upload de print do perfil</Label>
            <Input
              id="print-perfil"
              name="print-perfil"
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePreview(e.target.files?.[0]?.name ?? null)}
            />
            {profilePreview && (
              <p className="text-xs text-muted-foreground">Arquivo selecionado: {profilePreview}</p>
            )}
          </div>

          {status === "success" && (
            <p className="text-sm text-green-600">
              Informações enviadas com sucesso! Em breve entraremos em contato.
            </p>
          )}
          {status === "error" && errorMessage && (
            <p className="text-sm text-destructive">{errorMessage}</p>
          )}

          <Button type="submit" className="w-full" disabled={status === "loading"}>
            {status === "loading" ? "Enviando..." : "Enviar informações"}
          </Button>
        </form>
      </div>
    </div>
  );
}
