import { useEffect, useRef, useState } from "react";
import {
  Instagram,
  Linkedin,
  FileText,
  Link2,
  ArrowRight,
  ArrowLeft,
  Check,
  Lock,
  Loader2,
  AlertTriangle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* --------------------------------- dados --------------------------------- */

const platforms = [
  {
    id: "instagram" as const,
    label: "Instagram",
    icon: Instagram,
    accent: "#E1306C",
    placeholder: "instagram.com/seuperfil",
    field: "link do seu perfil",
  },
  {
    id: "linkedin" as const,
    label: "LinkedIn",
    icon: Linkedin,
    accent: "#0A66C2",
    placeholder: "linkedin.com/in/seunome",
    field: "link do seu perfil",
  },
  {
    id: "curriculo" as const,
    label: "Currículo",
    icon: FileText,
    accent: "#059669",
    placeholder: "drive.google.com/seu-curriculo",
    field: "link do seu currículo",
  },
];

type PlatformId = (typeof platforms)[number]["id"];

const questions = [
  {
    id: "objetivo",
    title: "Qual é o seu principal objetivo hoje?",
    options: ["Atrair clientes", "Conseguir uma vaga", "Ganhar autoridade", "Vender mais"],
  },
  {
    id: "dificuldade",
    title: "O que mais te trava hoje?",
    options: [
      "Não sei o que postar",
      "Ninguém me chama",
      "Não sei me apresentar",
      "Tenho visitas, mas não converte",
    ],
  },
  {
    id: "tempo",
    title: "Há quanto tempo você tenta resolver isso sozinho?",
    options: ["Menos de 1 mês", "Alguns meses", "Mais de 1 ano", "Nunca parei pra olhar"],
  },
];

const analysisSteps = [
  "Verificando posicionamento",
  "Avaliando apresentação",
  "Identificando oportunidades",
];

const findings = [
  {
    status: "alert" as const,
    label: "Posicionamento",
    text: "Não está claro em 3 segundos o que você faz e para quem.",
  },
  {
    status: "alert" as const,
    label: "Apresentação",
    text: "Falta um elemento de prova que gere confiança logo no primeiro contato.",
  },
];

const lockedFindings = [
  "Reescrita completa da sua bio/título com foco no seu objetivo",
  "As 7 oportunidades específicas encontradas no seu perfil",
  "Plano de ação passo a passo para os próximos 7 dias",
];

const statusStyles = {
  alert: { icon: AlertTriangle, wrap: "bg-[#fff1e6] text-[#c2410c]" },
  ok: { icon: Check, wrap: "bg-[#e3f8ec] text-[#047857]" },
};

/* ------------------------------- componente ------------------------------- */

type Stage = "platform" | "url" | "questions" | "analyzing" | "result";

export function MiniDiagnostic() {
  const [stage, setStage] = useState<Stage>("platform");
  const [platformId, setPlatformId] = useState<PlatformId | null>(null);
  // Mantido apenas no estado do navegador: nada é enviado, salvo ou integrado.
  const [url, setUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [analysisStep, setAnalysisStep] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const platform = platforms.find((p) => p.id === platformId) ?? platforms[0];

  useEffect(() => {
    return () => timers.current.forEach(clearTimeout);
  }, []);

  function startAnalysis() {
    setStage("analyzing");
    setAnalysisStep(0);
    timers.current.forEach(clearTimeout);
    timers.current = [
      setTimeout(() => setAnalysisStep(1), 1100),
      setTimeout(() => setAnalysisStep(2), 2200),
      setTimeout(() => setAnalysisStep(3), 3300),
      setTimeout(() => setStage("result"), 3900),
    ];
  }

  function handleUrlSubmit() {
    const value = url.trim();
    if (value.length < 4 || !value.includes(".")) {
      setUrlError("Informe um link válido para iniciar a análise.");
      return;
    }
    setUrlError("");
    setStage("questions");
  }

  function answerQuestion(option: string) {
    const next = [...answers.slice(0, questionIndex), option];
    setAnswers(next);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      startAnalysis();
    }
  }

  function reset() {
    timers.current.forEach(clearTimeout);
    setStage("platform");
    setPlatformId(null);
    setUrl("");
    setUrlError("");
    setAnswers([]);
    setQuestionIndex(0);
    setAnalysisStep(0);
  }

  const progress =
    stage === "platform"
      ? 10
      : stage === "url"
        ? 30
        : stage === "questions"
          ? 40 + questionIndex * 15
          : stage === "analyzing"
            ? 85
            : 100;

  return (
    <div className="rounded-[1.5rem] border border-[#cfe2ff] bg-white p-5 shadow-[0_16px_36px_rgba(37,99,235,0.12)] sm:p-8">
      <div className="mx-auto max-w-xl text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#eaf1ff] px-3 py-1 text-[11px] font-extrabold tracking-wide text-[#1d4ed8] uppercase">
          <Sparkles className="size-3.5" /> Simulação gratuita
        </span>
        <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
          Faça uma prévia do seu diagnóstico
        </h3>
        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          Menos de 1 minuto para ver onde seu perfil está travando.
        </p>
      </div>

      <div className="mx-auto mt-6 h-1.5 w-full max-w-xl overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-[#2563eb] transition-[width] duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto mt-6 max-w-xl">
        {/* 1. escolher */}
        {stage === "platform" && (
          <div>
            <p className="text-center text-sm font-bold text-slate-900">
              O que você quer analisar?
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {platforms.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => {
                    setPlatformId(p.id);
                    setStage("url");
                  }}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 text-left transition-all hover:-translate-y-0.5 hover:border-[#93bdff] hover:shadow-[0_10px_22px_rgba(37,99,235,0.14)] sm:flex-col sm:items-start"
                >
                  <span
                    className="grid size-10 shrink-0 place-items-center rounded-lg text-white"
                    style={{ backgroundColor: p.accent }}
                  >
                    <p.icon className="size-5" />
                  </span>
                  <span className="text-sm font-bold text-slate-900">{p.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 2. url */}
        {stage === "url" && (
          <div>
            <p className="text-center text-sm font-bold text-slate-900">
              Digite o {platform.field} para iniciar a análise
            </p>
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 focus-within:border-[#93bdff] focus-within:bg-white">
              <Link2 className="size-4 shrink-0 text-slate-400" />
              <input
                type="text"
                inputMode="url"
                autoComplete="off"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleUrlSubmit()}
                placeholder={platform.placeholder}
                aria-label={`Digite o ${platform.field}`}
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>
            {urlError && (
              <p className="mt-2 text-xs font-semibold text-[#c2410c]">{urlError}</p>
            )}
            <p className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="size-3.5" /> Nada é enviado, salvo ou publicado.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStage("platform")}
                className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                <ArrowLeft className="size-3.5" /> Voltar
              </button>
              <Button
                onClick={handleUrlSubmit}
                className="ml-auto rounded-lg bg-[#2563eb] px-5 font-bold text-white transition-transform hover:scale-[1.03] hover:bg-[#1d4ed8]"
              >
                Continuar <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        )}

        {/* 3. perguntas */}
        {stage === "questions" && (
          <div>
            <p className="text-center text-[11px] font-bold tracking-wide text-slate-400 uppercase">
              Pergunta {questionIndex + 1} de {questions.length}
            </p>
            <p className="mt-2 text-center text-base font-bold text-slate-900 sm:text-lg">
              {questions[questionIndex].title}
            </p>
            <div className="mt-4 grid gap-2.5">
              {questions[questionIndex].options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => answerQuestion(option)}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-700 transition-all hover:border-[#93bdff] hover:bg-[#f5f9ff] hover:text-slate-900 hover:shadow-[0_8px_18px_rgba(37,99,235,0.12)]"
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() =>
                questionIndex === 0 ? setStage("url") : setQuestionIndex(questionIndex - 1)
              }
              className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              <ArrowLeft className="size-3.5" /> Voltar
            </button>
          </div>
        )}

        {/* 4. animação */}
        {stage === "analyzing" && (
          <div className="py-2">
            <p className="text-center text-base font-bold text-slate-900">
              Analisando seu {platform.label}...
            </p>
            <ul className="mx-auto mt-5 max-w-sm space-y-3">
              {analysisSteps.map((step, i) => {
                const done = analysisStep > i;
                const active = analysisStep === i;
                return (
                  <li
                    key={step}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-300 ${
                      done
                        ? "border-[#bde8d0] bg-[#f2fdf7]"
                        : active
                          ? "border-[#bcd8ff] bg-[#f5f9ff]"
                          : "border-slate-100 bg-white opacity-50"
                    }`}
                  >
                    <span
                      className={`grid size-6 shrink-0 place-items-center rounded-md ${
                        done ? "bg-[#e3f8ec] text-[#047857]" : "bg-[#eaf1ff] text-[#1d4ed8]"
                      }`}
                    >
                      {done ? (
                        <Check className="size-3.5" />
                      ) : (
                        <Loader2 className={`size-3.5 ${active ? "animate-spin" : ""}`} />
                      )}
                    </span>
                    <span className="text-sm font-semibold text-slate-700">{step}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* 5. resultado parcial + 6. CTA */}
        {stage === "result" && (
          <div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="flex items-center gap-3">
                <span
                  className="grid size-11 shrink-0 place-items-center rounded-full text-sm font-extrabold text-white"
                  style={{ backgroundColor: platform.accent }}
                >
                  58
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-slate-900">
                    Prévia do seu {platform.label}
                  </p>
                  <p className="truncate text-xs text-slate-500">
                    Objetivo: {answers[0] ?? "—"}
                  </p>
                </div>
                <span className="ml-auto hidden rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold tracking-wide text-slate-600 uppercase sm:inline">
                  Parcial
                </span>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span>Potencial aproveitado hoje</span>
                  <span>58/100</span>
                </div>
                <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full transition-[width] duration-700"
                    style={{ width: "58%", backgroundColor: platform.accent }}
                  />
                </div>
              </div>

              <ul className="mt-4 space-y-2.5">
                {findings.map((f) => {
                  const style = statusStyles[f.status];
                  return (
                    <li
                      key={f.label}
                      className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/70 p-2.5"
                    >
                      <span
                        className={`grid size-6 shrink-0 place-items-center rounded-md ${style.wrap}`}
                      >
                        <style.icon className="size-3.5" />
                      </span>
                      <p className="text-xs leading-snug text-slate-700 sm:text-sm">
                        <span className="font-bold text-slate-900">{f.label}:</span> {f.text}
                      </p>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-4 rounded-lg border border-dashed border-[#c7dcff] bg-[#f7fbff] p-3">
                <p className="flex items-center gap-1.5 text-[11px] font-extrabold tracking-wide text-[#1d4ed8] uppercase">
                  <Lock className="size-3.5" /> Liberado no diagnóstico completo
                </p>
                <ul className="mt-2 space-y-1.5">
                  {lockedFindings.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-500">
                      <Lock className="mt-0.5 size-3 shrink-0 text-slate-400" />
                      <span className="blur-[2.5px] select-none">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-3 text-center text-[10px] text-slate-400">
                Prévia ilustrativa. O diagnóstico completo é feito por análise humana com IA.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="mt-5 w-full rounded-xl bg-[#2563eb] py-6 text-base font-extrabold text-white transition-transform hover:scale-[1.02] hover:bg-[#1d4ed8]"
            >
              <a href="#precos">
                Quero receber meu diagnóstico <ArrowRight className="size-5" />
              </a>
            </Button>
            <button
              type="button"
              onClick={reset}
              className="mx-auto mt-3 block text-xs font-semibold text-slate-500 hover:text-slate-800"
            >
              Refazer a simulação
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
