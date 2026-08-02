import {
  Instagram,
  Linkedin,
  Link2,
  ShieldCheck,
  FileText,
  Search,
  Briefcase,
  Check,
  MessageCircle,
  ShieldCheck as ShieldIcon,
  Star,
  ArrowRight,
  Lock,
  CreditCard,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { MiniDiagnostic } from "./MiniDiagnostic";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import mascote from "@/assets/mascote.png";
import depo1 from "@/assets/depo-1.jpg";
import depo2 from "@/assets/depo-2.jpg";
import depo3 from "@/assets/depo-3.jpg";
import depo4 from "@/assets/depo-4.jpg";
import depo5 from "@/assets/depo-5.jpg";

function SectionDivider() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-x-[10%] bottom-9 h-px bg-gradient-to-r from-transparent via-[#a9ceff] to-transparent" />
      <span className="absolute bottom-[2.15rem] left-1/2 size-2.5 -translate-x-1/2 rounded-full bg-[#60a5fa] shadow-[0_0_18px_rgba(59,130,246,0.7)]" />
      <div className="absolute -right-[8%] -bottom-16 h-32 w-[116%] rounded-[50%] border-t border-[#d8e9ff]/60 bg-white/15 blur-sm" />
    </div>
  );
}

/* ---------------------------------- Hero --------------------------------- */

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center overflow-x-hidden pt-20 pb-0 sm:pt-24"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.45), rgba(191, 219, 254, 0.22) 60%, transparent 90%), var(--gradient-hero)",
      }}
    >
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <Reveal delay={80}>
          <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-foreground sm:text-6xl lg:text-6xl">
            Descubra o que está fazendo{" "}
            <span className="text-primary">recrutadores</span> e{" "}
            <span className="text-primary">clientes</span> ignorarem seu perfil
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Uma análise personalizada revela os erros que estão escondendo seu potencial e mostra exatamente o que ajustar para transformar seu perfil em uma ferramenta de oportunidades.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-9 flex flex-col items-center">
            <Button
              asChild
              size="lg"
              className="w-full rounded-full bg-[#1D4ED8] px-10 py-7 text-base font-bold text-white shadow-[0_12px_40px_-6px_rgba(29,78,216,0.75)] ring-1 ring-white/10 transition-all duration-300 ease-out hover:scale-[1.04] hover:bg-[#1E40AF] hover:shadow-[0_18px_50px_-8px_rgba(29,78,216,0.9)] sm:w-auto sm:px-12 sm:py-7 sm:text-xl"
            >
              <a href="#precos">
                Quero meu diagnóstico agora
              </a>
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              Receba seu diagnóstico em poucos minutos
            </p>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-6 inline-flex items-center gap-4 rounded-full bg-cta-soft px-6 py-3.5 text-base font-semibold text-cta transition-shadow duration-300 hover:shadow-[var(--shadow-soft)]">
            <div className="flex -space-x-2.5">
              {[depo1, depo2, depo3, depo4, depo5].map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt=""
                  width={32}
                  height={32}
                  className="size-8 shrink-0 rounded-full border-2 border-background object-cover transition-transform duration-300 ease-out hover:z-10 hover:scale-125"
                />
              ))}
            </div>
            <span className="flex items-center gap-2">
              <Star className="size-5 fill-current" />
              +500 pessoas já analisaram seus perfis
            </span>
          </div>
        </Reveal>
      </div>
      <SectionDivider />
    </section>
  );
}

/* ------------------------------ Como funciona ----------------------------- */

const steps = [
  {
    icon: Link2,
    title: "Cole o link",
    text: "Cole o link do seu Instagram, LinkedIn ou currículo em PDF.",
  },
  {
    icon: ShieldCheck,
    title: "Pague com segurança",
    text: "Pagamento único, sem assinatura. Pague via Pix, cartão de débito ou crédito.",
  },
  {
    icon: FileText,
    title: "Receba seu diagnóstico",
    text: "Em minutos, um relatório com pontos fortes, pontos fracos e o que fazer pra melhorar.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden pt-14 pb-24 sm:pt-16 sm:pb-28 lg:flex lg:min-h-screen lg:items-center">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.24),transparent_72%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-[2.75rem]">Como funciona</h2>
          <p className="mt-3 text-muted-foreground">Do diagnóstico ao plano de melhoria em apenas 3 passos.</p>
        </Reveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className="group relative">
              {i < steps.length - 1 && (
                <span className="pointer-events-none absolute top-14 -right-3 hidden h-px w-6 bg-gradient-to-r from-[#93c5fd] to-transparent lg:block" />
              )}
              <div className="card-hover h-full min-h-56 rounded-[1.5rem] border border-[#cfe0ff] bg-white/90 p-6 shadow-[0_10px_24px_rgba(37,99,235,0.1)] backdrop-blur-sm sm:min-h-64 sm:p-8 lg:min-h-72 lg:p-10">
                <div className="flex items-center gap-4">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary ring-1 ring-[#cfe0ff] transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110">
                    <s.icon className="size-6" />
                  </span>
                  <span className="text-sm font-extrabold tracking-wide text-primary">Passo {i + 1}</span>
                </div>
                <h3 className="mt-7 text-2xl font-extrabold tracking-tight text-slate-950">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
      <SectionDivider />
    </section>
  );
}

/* ------------------------------- Funcionalidades -------------------------- */

const blocks = [
  {
    badge: "🔍 DIAGNÓSTICO INSTAGRAM",
    icon: Search,
    title: "Análise completa do seu",
    accent: "Instagram",
    text: "A IA analisa sua foto de perfil, bio, posts e engajamento, e mostra o que está afastando seguidores e oportunidades.",
    cta: "Diagnosticar meu Instagram",
    href: "https://pay.cakto.com.br/3aay2uu_1015307",
    preview: {
      handle: "@seuperfil",
      subtitle: "Perfil analisado pela IA",
      score: 62,
      scoreLabel: "Potencial de atração",
      accentHex: "#2563eb",
      items: [
        { status: "alert" as const, label: "Bio", text: "Não diz o que você faz nem pra quem" },
        { status: "alert" as const, label: "Posicionamento", text: "Mistura 3 assuntos e confunde quem chega" },
        { status: "ok" as const, label: "Foto de perfil", text: "Boa: rosto visível e nítido" },
        { status: "tip" as const, label: "Próximo passo", text: "Nova bio + 5 ideias de post prontas" },
      ],
    },
    cardClass: "border-[#b9d6ff] bg-[#e7f0ff] shadow-[0_10px_22px_rgba(37,99,235,0.16)]",
    iconClass: "bg-[#2563eb] text-white",
    badgeClass: "bg-[#d7e7ff] text-[#1d4ed8]",
    accentClass: "text-[#2563eb]",
    buttonClass: "bg-[#2563eb] text-white hover:bg-[#1d4ed8]",
  },
  {
    badge: "💼 DIAGNÓSTICO LINKEDIN",
    icon: Briefcase,
    title: "Análise completa do seu",
    accent: "LinkedIn",
    text: "A IA revisa seu perfil, resumo e experiência, e aponta o que fazer pra aparecer mais em buscas de recrutadores.",
    cta: "Diagnosticar meu LinkedIn",
    href: "https://pay.cakto.com.br/ok9npdx_1015278",
    preview: {
      handle: "Seu perfil profissional",
      subtitle: "Visibilidade para recrutadores",
      score: 48,
      scoreLabel: "Chance de aparecer em buscas",
      accentHex: "#9333ea",
      items: [
        { status: "alert" as const, label: "Título", text: "Genérico: não usa o cargo que buscam" },
        { status: "alert" as const, label: "Palavras-chave", text: "Faltam 7 termos da sua área" },
        { status: "ok" as const, label: "Experiências", text: "Histórico completo e sem lacunas" },
        { status: "tip" as const, label: "Próximo passo", text: "Título e resumo reescritos pra você" },
      ],
    },
    cardClass: "border-[#e5c8ff] bg-[#f7ebff] shadow-[0_10px_22px_rgba(147,51,234,0.16)]",
    iconClass: "bg-[#9333ea] text-white",
    badgeClass: "bg-[#f0dcff] text-[#7e22ce]",
    accentClass: "text-[#9333ea]",
    buttonClass: "bg-[#9333ea] text-white hover:bg-[#7e22ce]",
  },
  {
    badge: "📄 CURRÍCULO",
    icon: FileText,
    title: "Seu currículo também entra na",
    accent: "análise",
    text: "Envie seu currículo em PDF junto e receba dicas específicas de como melhorá-lo para as áreas que você busca.",
    cta: "Diagnosticar meu currículo",
    href: "https://pay.cakto.com.br/34b3oe2_1015216",
    preview: {
      handle: "curriculo.pdf",
      subtitle: "Revisão página a página",
      score: 55,
      scoreLabel: "Aprovação na triagem",
      accentHex: "#059669",
      items: [
        { status: "alert" as const, label: "Resumo", text: "Fala de tarefas, não de resultados" },
        { status: "alert" as const, label: "Formato", text: "Layout que trava em sistemas de triagem" },
        { status: "ok" as const, label: "Tamanho", text: "2 páginas: dentro do ideal" },
        { status: "tip" as const, label: "Próximo passo", text: "Versão corrigida com verbos de impacto" },
      ],
    },
    cardClass: "border-[#9cefc8] bg-[#ddfaeb] shadow-[0_10px_22px_rgba(5,150,105,0.16)]",
    iconClass: "bg-[#059669] text-white",
    badgeClass: "bg-[#c9f7df] text-[#047857]",
    accentClass: "text-[#059669]",
    buttonClass: "bg-[#059669] text-white hover:bg-[#047857]",
  },
];

type PreviewItem = { status: "alert" | "ok" | "tip"; label: string; text: string };
type Preview = (typeof blocks)[number]["preview"];

const itemStyles = {
  alert: { icon: AlertTriangle, wrap: "bg-[#fff1e6] text-[#c2410c]" },
  ok: { icon: Check, wrap: "bg-[#e3f8ec] text-[#047857]" },
  tip: { icon: Sparkles, wrap: "bg-[#eaf1ff] text-[#1d4ed8]" },
};

function ReportPreview({ preview }: { preview: Preview }) {
  return (
    <div
      className="w-full rounded-xl border border-black/5 bg-white p-4 shadow-lg sm:p-5"
      role="img"
      aria-label={`Exemplo de relatório: ${preview.handle}, ${preview.scoreLabel} ${preview.score} de 100`}
    >
      <div className="flex items-center gap-3">
        <span
          className="grid size-10 shrink-0 place-items-center rounded-full text-sm font-extrabold text-white"
          style={{ backgroundColor: preview.accentHex }}
        >
          {preview.score}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-slate-900">{preview.handle}</p>
          <p className="truncate text-xs text-slate-500">{preview.subtitle}</p>
        </div>
        <span className="ml-auto hidden rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold tracking-wide text-slate-600 uppercase sm:inline">
          Relatório IA
        </span>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
          <span>{preview.scoreLabel}</span>
          <span>{preview.score}/100</span>
        </div>
        <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full"
            style={{ width: `${preview.score}%`, backgroundColor: preview.accentHex }}
          />
        </div>
      </div>

      <ul className="mt-4 space-y-2.5">
        {(preview.items as PreviewItem[]).map((item) => {
          const style = itemStyles[item.status];
          return (
            <li
              key={item.label}
              className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/70 p-2.5"
            >
              <span className={`grid size-6 shrink-0 place-items-center rounded-md ${style.wrap}`}>
                <style.icon className="size-3.5" />
              </span>
              <p className="text-xs leading-snug text-slate-700 sm:text-sm">
                <span className="font-bold text-slate-900">{item.label}:</span> {item.text}
              </p>
            </li>
          );
        })}
      </ul>

      <p className="mt-3 text-center text-[10px] text-slate-400">
        Exemplo ilustrativo de relatório
      </p>
    </div>
  );
}

export function Features() {
  return (
    <section id="funcionalidades" className="relative overflow-hidden pt-20 pb-24 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.23),transparent_72%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
            Conheça o que você recebe
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ferramentas simples que mostram exatamente o que ajustar pra sua rede social atrair
            mais oportunidades
          </p>
        </Reveal>

        <div className="mt-12 space-y-7">
          {blocks.map((b) => (
            <Reveal key={b.cta}>
              <article
                className={`card-hover grid items-center gap-8 rounded-[1.5rem] border p-5 backdrop-blur-sm sm:p-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 ${b.cardClass}`}
              >
                <div className="py-1 sm:py-2">
                  <span className={`grid size-12 place-items-center rounded-xl shadow-sm ${b.iconClass}`}>
                    <b.icon className="size-6" />
                  </span>
                  <p
                    className={`mt-4 inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase ${b.badgeClass}`}
                  >
                    {b.badge}
                  </p>
                  <h3 className="mt-3 text-2xl leading-tight font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                    {b.title} <span className={b.accentClass}>{b.accent}</span>
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-700 sm:text-base">{b.text}</p>
                  <Button
                    asChild
                    size="sm"
                    className={`mt-5 rounded-lg px-4 font-bold transition-transform hover:scale-[1.03] ${b.buttonClass}`}
                  >
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {b.cta} <ArrowRight className="size-4" />
                    </a>
                  </Button>
                </div>
                <ReportPreview preview={b.preview} />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <MiniDiagnostic />
        </Reveal>
      </div>
      <SectionDivider />
    </section>
  );
}

/* -------------------------------- Prova social ---------------------------- */

const testimonials = [
  {
    name: "Camila Ribeiro",
    role: "Designer de sobrancelhas",
    photo: depo1,
    date: "29 de julho de 2026",
    cardClass: "border-[#edc8ef] bg-[#f9e9f7]",
    highlightClass: "bg-[#d9f8df] text-[#167a36]",
    text: [
      { content: "Eu não sabia o que estava errado no meu Instagram. O ", highlight: false },
      { content: "relatório explicou tudo", highlight: true },
      { content: " em português claro e, em uma semana, já apareceram clientes novos.", highlight: false },
    ],
  },
  {
    name: "Lucas Ferreira",
    role: "Estudante de administração",
    photo: depo2,
    date: "8 de janeiro de 2026",
    cardClass: "border-[#9ac4ff] bg-[#eef0ff]",
    highlightClass: "bg-[#fff3b8] text-[#3f3f21]",
    text: [
      { content: "Arrumei meu LinkedIn seguindo o passo a passo do PDF e comecei a receber ", highlight: false },
      { content: "mensagem de recrutador", highlight: true },
      { content: ". Valeu cada centavo.", highlight: false },
    ],
  },
  {
    name: "Adriana Souza",
    role: "Nutricionista",
    photo: depo3,
    date: "5 de fevereiro de 2025",
    cardClass: "border-[#a7efd0] bg-[#ddfaef]",
    highlightClass: "bg-[#fff3b8] text-[#3f3f21]",
    text: [
      { content: "O que mais gostei foi a ", highlight: false },
      { content: "lista do que fazer primeiro", highlight: true },
      { content: ". Não fiquei perdida; só fui marcando o que já tinha ajustado.", highlight: false },
    ],
  },
  {
    name: "Rafael Martins",
    role: "Personal trainer",
    photo: depo4,
    date: "15 de dezembro de 2024",
    cardClass: "border-[#ffcda6] bg-[#fff0e8]",
    highlightClass: "bg-[#fff3b8] text-[#3f3f21]",
    text: [
      { content: "Achei que ia ser aquele texto genérico, mas era sobre o ", highlight: false },
      { content: "meu perfil mesmo", highlight: true },
      { content: ": minha bio, minhas fotos e meus posts.", highlight: false },
    ],
  },
  {
    name: "Sônia Almeida",
    role: "Consultora de vendas",
    photo: depo5,
    date: "20 de março de 2026",
    cardClass: "border-[#b9d6ff] bg-[#e8f1ff]",
    highlightClass: "bg-[#fff3b8] text-[#3f3f21]",
    text: [
      { content: "Tenho 52 anos e me viro pouco com tecnologia. Foi só colar o link e pagar. ", highlight: false },
      { content: "Recebi o PDF no e-mail rapidinho", highlight: true },
      { content: ".", highlight: false },
    ],
  },
];

export function SocialProof() {
  return (
    <section id="depoimentos" className="relative overflow-hidden pt-20 pb-24 sm:pt-24 sm:pb-28 lg:flex lg:min-h-screen lg:items-center">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_center,rgba(147,197,253,0.18),transparent_72%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
            Quem já fez, recomenda
          </h2>
          <p className="mt-3 text-muted-foreground">
            Histórias de pessoas comuns que ajustaram o perfil e viram diferença.
          </p>
        </Reveal>

        <ul className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-1 pb-7 md:gap-6">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 90} className="w-[280px] shrink-0 snap-start sm:w-[300px]">
              <figure className={`card-hover flex min-h-[430px] h-full flex-col rounded-2xl border p-6 shadow-[0_12px_28px_rgba(37,99,235,0.12)] sm:p-7 ${t.cardClass}`}>
                <figcaption className="flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={`Foto de ${t.name}`}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="size-12 shrink-0 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <span className="min-w-0">
                    <span className="block truncate font-bold text-slate-950">{t.name}</span>
                    <span className="block truncate text-sm text-slate-600">{t.role}</span>
                  </span>
                </figcaption>
                <div className="mt-6 flex gap-1 text-amber-400">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700 sm:text-base">
                  {t.text.map((part, partIndex) =>
                    part.highlight ? (
                      <mark key={partIndex} className={`rounded px-1 font-bold ${t.highlightClass}`}>
                        {part.content}
                      </mark>
                    ) : (
                      <span key={partIndex}>{part.content}</span>
                    ),
                  )}
                </blockquote>
                <p className="mt-5 text-xs text-slate-500">{t.date}</p>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
      <SectionDivider />
    </section>
  );
}

/* -------------------------------- Garantia -------------------------------- */

export function Guarantee() {
  return (
    <section id="garantia" className="relative overflow-hidden py-20 sm:py-24 lg:flex lg:min-h-[78svh] lg:items-center">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.16),transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-[2rem] border-2 border-cta bg-cta-soft p-7 text-center sm:p-10">
            <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-cta text-cta-foreground">
              <ShieldIcon className="size-7" />
            </span>
            <h2 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Garantia de satisfação de 7 dias
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Leu o diagnóstico e sentiu que não te ajudou? É só mandar uma mensagem em até 7 dias
              que a gente devolve o seu dinheiro. Sem formulário, sem discussão.
            </p>
          </div>
        </Reveal>
      </div>
      <SectionDivider />
    </section>
  );
}

/* --------------------------------- Preços --------------------------------- */

const plans = [
  {
    name: "Diagnóstico Instagram",
    href: "https://pay.cakto.com.br/3aay2uu_1015307",
    originalPrice: "R$57,97",
    price: "R$19,97",
    savings: "Você economiza R$38,00",
    icon: Instagram,
    cardClass: "border-[#f7b8cf] bg-[#fff0f6]",
    iconClass: "bg-[#fce0eb] text-[#d94680]",
    priceClass: "text-[#d94680]",
    savingsClass: "bg-[#fde3ec] text-[#b23764]",
    buttonClass: "bg-[#e95b91] text-white hover:bg-[#d94680] shadow-[0_16px_36px_-10px_rgba(217,70,128,0.6)]",
    items: [
      "Análise da foto de perfil e da bio",
      "Leitura dos seus posts e do engajamento",
      "Pontos fortes e pontos fracos",
      "Plano de ação prático em PDF",
    ],
    cta: "Quero garantir",
  },
  {
    name: "Diagnóstico LinkedIn",
    href: "https://pay.cakto.com.br/ok9npdx_1015278",
    originalPrice: "R$57,97",
    price: "R$19,97",
    savings: "Você economiza R$38,00",
    icon: Linkedin,
    cardClass: "border-[#a9ccff] bg-[#edf5ff]",
    iconClass: "bg-[#dcecff] text-[#1d70d6]",
    priceClass: "text-[#1d70d6]",
    savingsClass: "bg-[#dce9ff] text-[#155bb0]",
    buttonClass: "bg-[#1d70d6] text-white hover:bg-[#155bb0] shadow-[0_16px_36px_-10px_rgba(29,112,214,0.6)]",
    items: [
      "Análise do perfil, resumo e experiência",
      "Dicas pra aparecer mais em buscas",
      "Pontos fortes e pontos fracos",
      "Plano de ação prático em PDF",
    ],
    cta: "Quero garantir",
  },
];

export function Pricing() {
  return (
    <>
      <section id="precos" className="relative overflow-hidden pt-20 pb-24 sm:pt-24 sm:pb-28 lg:flex lg:min-h-screen lg:items-center">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.16),transparent_72%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
              Escolha seu diagnóstico
            </h2>
            <p className="mt-3 text-muted-foreground">
              Pagamento único. Sem assinatura, sem pegadinha.
            </p>
          </Reveal>

          <Reveal className="mx-auto mt-10 flex max-w-4xl justify-center">
            <div className="relative animate-pulse-soft rounded-2xl border border-blue-200 bg-white px-6 py-3 text-center shadow-[0_12px_32px_-8px_rgba(37,99,235,0.35)]">
              <p className="text-sm font-extrabold tracking-tight text-blue-600 sm:text-base">
                ⚡ Desconto relâmpago
              </p>
              <p className="mt-0.5 text-xs font-medium text-muted-foreground sm:text-sm">
                Oferta especial por tempo limitado
              </p>
            </div>
          </Reveal>

          <ul className="mx-auto mt-8 grid max-w-4xl items-stretch gap-8 md:grid-cols-2">
            {plans.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 120} className="h-full">
                <div
                  className={`card-hover relative flex h-full flex-col rounded-[2rem] border-2 p-8 shadow-[0_16px_40px_rgba(37,99,235,0.14)] sm:p-10 ${p.cardClass}`}
                >
                  <span className={`grid size-14 place-items-center rounded-2xl ${p.iconClass}`}>
                    <p.icon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight">{p.name}</h3>

                  <div className="mt-5 flex items-baseline gap-2.5">
                    <span className="text-base font-medium text-muted-foreground line-through">
                      {p.originalPrice}
                    </span>
                    <span className={`text-5xl font-extrabold tracking-tight ${p.priceClass}`}>{p.price}</span>
                  </div>
                  <p
                    className={`mt-3 inline-flex w-fit items-center rounded-full px-3 py-1 text-sm font-bold ${p.savingsClass}`}
                  >
                    {p.savings}
                  </p>

                  <ul className="mt-7 flex-1 space-y-3">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-2 text-sm text-muted-foreground sm:text-base">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    className={`mt-8 w-full rounded-full py-7 text-lg font-bold transition-transform hover:scale-[1.03] ${p.buttonClass}`}
                  >
                    <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.cta}
                  </a>
                  </Button>
                  <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-sm font-semibold text-slate-600">
                    <ShieldIcon className="size-4 text-primary" />
                    Garantia de satisfação
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          {/* Avaliações / prova social */}
          <Reveal className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {testimonials.slice(0, 2).map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-blue-100 bg-white p-5 text-left shadow-[0_10px_28px_-10px_rgba(37,99,235,0.2)] sm:p-6"
              >
                <div className="flex gap-1 text-amber-400">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="size-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-slate-700">
                  {t.text.map((part, partIndex) => (
                    <span key={partIndex}>{part.content}</span>
                  ))}
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={`Foto de ${t.name}`}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="size-9 shrink-0 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold text-slate-950">{t.name}</span>
                    <span className="block truncate text-xs text-slate-600">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </Reveal>

          {/* Garantia de satisfação */}
          <Reveal className="mx-auto mt-8 max-w-2xl">
            <div className="rounded-[2rem] border-2 border-cta bg-cta-soft p-7 text-center sm:p-10">
              <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-cta text-cta-foreground">
                <ShieldIcon className="size-7" />
              </span>
              <h2 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Garantia de satisfação de 7 dias
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Leu o diagnóstico e sentiu que não te ajudou? É só mandar uma mensagem em até 7 dias
                que a gente devolve o seu dinheiro. Sem formulário, sem discussão.
              </p>
            </div>
          </Reveal>

          {/* Elementos de segurança */}
          <Reveal className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3 sm:gap-4">
            <span className="flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm sm:text-sm">
              <Lock className="size-4 text-primary" />
              Ambiente de pagamento seguro
            </span>
            <span className="flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm sm:text-sm">
              <CreditCard className="size-4 text-primary" />
              Pix, débito ou crédito
            </span>
            <span className="flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm sm:text-sm">
              <ShieldIcon className="size-4 text-primary" />
              Você nunca informa senha
            </span>
          </Reveal>
        </div>
        <SectionDivider />
      </section>
    </>
  );
}

/* ----------------------------------- FAQ ---------------------------------- */

const faqs = [
  {
    q: "Isso funciona mesmo? Como a IA analisa meu perfil?",
    a: "Sim. A inteligência artificial olha o que qualquer pessoa vê no seu perfil público: foto, bio, textos, publicações e como tudo isso está organizado. Depois ela compara com o que costuma funcionar bem e monta um relatório com o que está bom e o que dá pra melhorar.",
  },
  {
    q: "Como funciona o pagamento? É seguro?",
    a: "É um pagamento único, feito em ambiente seguro por Pix ou cartão. A gente não vê nem guarda os dados do seu cartão.",
  },
  {
    q: "Em quanto tempo recebo meu diagnóstico?",
    a: "Em poucos minutos depois do pagamento. Você recebe o relatório em PDF no seu e-mail.",
  },
  {
    q: "Preciso entender de marketing pra aproveitar o relatório?",
    a: "Não. O relatório é escrito em linguagem simples, com passos práticos do tipo “troque isso por aquilo”. Se aparecer algum termo diferente, ele vem explicado.",
  },
  {
    q: "É seguro colar meu link do Instagram/LinkedIn? Vocês guardam minha senha?",
    a: "Você nunca faz login e nunca informa senha. A gente só usa o link público do seu perfil, o mesmo que você mandaria para um amigo. Não pedimos, não acessamos e não guardamos senhas.",
  },
  {
    q: "Posso pedir os dois diagnósticos (Instagram e LinkedIn) separadamente depois?",
    a: "Sim, cada um é vendido separadamente. Você pode começar pelo que for mais urgente agora e fazer o outro depois.",
  },
  {
    q: "Funciona pra qualquer área profissional?",
    a: "Sim. A análise leva em conta a área que você quer crescer, seja beleza, saúde, tecnologia, vendas, educação ou qualquer outra.",
  },
  {
    q: "É fácil de usar? Funciona no celular?",
    a: "Funciona, sim. Tudo é feito pelo celular: você cola o link, paga e recebe o PDF. Não precisa instalar nada.",
  },
  {
    q: "Tem suporte se eu tiver dúvida sobre o relatório?",
    a: "Tem. É só chamar no WhatsApp que a gente ajuda você a entender cada ponto do diagnóstico.",
  },
];

export function Faq() {
  return (
    <section id="perguntas" className="relative min-h-screen overflow-hidden pt-20 pb-24 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.2),transparent_72%)]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Se ficou alguma dúvida, é só perguntar pra gente.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-[#cfe0ff] bg-white/90 px-5 shadow-[0_6px_18px_rgba(37,99,235,0.07)]"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={160} className="mt-10 text-center">
          <p className="text-lg font-bold">Ainda tem dúvidas?</p>
          <Button
            asChild
            size="lg"
            className="mt-4 rounded-full bg-cta px-7 font-semibold text-cta-foreground transition-transform hover:scale-[1.03] hover:bg-cta-hover"
          >
            <a href="https://wa.me/5511987977362" target="_blank" rel="noreferrer">
              <MessageCircle className="size-5" /> Falar no WhatsApp
            </a>
          </Button>
        </Reveal>
      </div>
      <SectionDivider />
    </section>
  );
}

/* --------------------------------- Rodapé --------------------------------- */

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#dbe7ff] pt-16 pb-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.13),transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16 lg:grid-cols-[1.6fr_1fr]">
          {/* Marca */}
          <div className="max-w-md">
            <div className="flex min-w-0 items-center gap-2.5">
              <img
                src={mascote}
                alt="Mascote do Diagnóstico AI"
                width={44}
                height={44}
                loading="lazy"
                className="h-11 w-11 shrink-0 object-contain"
              />
              <span className="text-xl font-extrabold tracking-tight text-primary">
                Diagnóstico AI
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Um diagnóstico simples do seu Instagram, LinkedIn e currículo, feito por inteligência
              artificial, com um plano prático pra você crescer.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://www.instagram.com/diagnostico.ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Diagnóstico AI"
                className="grid size-10 place-items-center rounded-full bg-primary-soft text-primary transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn do Diagnóstico AI"
                className="grid size-10 place-items-center rounded-full bg-primary-soft text-primary transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>

          {/* Institucional */}
          <nav className="md:justify-self-end">
            <p className="text-xs font-bold tracking-[0.14em] text-foreground/80 uppercase">
              Institucional
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: "Sobre", href: "#topo" },
                { label: "Contato", href: "https://wa.me/5511987977362" },
                { label: "Política de privacidade", href: "#topo" },
                { label: "Termos de uso", href: "#topo" },
              ].map((l) => {
                const external = l.href.startsWith("http");
                return (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#e6eeff] pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Diagnóstico AI. Todos os direitos reservados.</p>
          <p>Feito no Brasil, com inteligência artificial.</p>
        </div>
      </div>
    </footer>
  );
}
