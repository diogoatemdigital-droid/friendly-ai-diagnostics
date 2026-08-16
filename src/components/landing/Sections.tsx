import { useEffect, useState } from "react";
import {
  Instagram,
  Linkedin,
  FileText,
  Briefcase,
  Check,
  ShieldCheck as ShieldIcon,
  Star,
  Lock,
  CreditCard,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./Reveal";
import logoGoogle from "@/assets/companies/google.webp";
import logoAmazon from "@/assets/companies/amazon.webp";
import logoNubank from "@/assets/companies/nubank.png";
import logoItau from "@/assets/companies/itau.webp";
import logoMercadoLivre from "@/assets/companies/mercado-livre.webp";
import { Button } from "@/components/ui/button";
import { trackInitiateCheckout } from "@/lib/meta-pixel";
import { trackBeginCheckout } from "@/lib/ga4";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import mascote from "@/assets/mascote-footer.webp";
import depo1 from "@/assets/testimonials/camila-ribeiro.webp";
import depo2 from "@/assets/testimonials/lucas-ferreira.webp";
import depo3 from "@/assets/testimonials/adriana-souza.webp";
import depo4 from "@/assets/testimonials/rafael-martins.webp";
import depo5 from "@/assets/testimonials/sonia-almeida.webp";
import chatCamila from "@/assets/testimonials/whatsapp/camila-ribeiro-whatsapp.jpg";
import chatLucas from "@/assets/testimonials/whatsapp/lucas-ferreira-whatsapp.jpg";
import chatAdriana from "@/assets/testimonials/whatsapp/adriana-souza-whatsapp.jpg";
import chatRafael from "@/assets/testimonials/whatsapp/rafael-martins-whatsapp.jpg";
import chatClaudia from "@/assets/testimonials/whatsapp/claudia-almeida-whatsapp.jpg";

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

const marketCompanies = [
  { name: "Google", logo: logoGoogle, width: 132, height: 132 },
  { name: "Amazon", logo: logoAmazon, width: 130, height: 132 },
  { name: "Nubank", logo: logoNubank, width: 400, height: 400 },
  { name: "Itaú", logo: logoItau, width: 132, height: 132 },
  { name: "Mercado Livre", logo: logoMercadoLivre, width: 240, height: 240 },
];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Fundo: campo de luz azul suave, único, atrás de todo o conteúdo */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div
          className="absolute left-1/2 top-[-9rem] h-[36rem] w-[44rem] -translate-x-1/2 sm:top-[-11rem] sm:h-[48rem] sm:w-[62rem] lg:top-[-13rem] lg:h-[58rem] lg:w-[82rem]"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(147,197,253,0.55) 0%, rgba(191,219,254,0.32) 42%, rgba(219,234,254,0.12) 68%, rgba(255,255,255,0) 82%)",
          }}
        />
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center sm:px-6">
        <Reveal eager delay={80}>
          <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-foreground sm:text-5xl lg:text-7xl">
            Seja <span className="text-primary">contratado</span> em menos de{" "}
            <span className="text-primary">duas semanas</span>
          </h1>
        </Reveal>
        <Reveal eager delay={120}>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:mt-6 sm:text-base lg:text-lg">
            Pare de perder oportunidades. Descubra o que está travando seu perfil e seja contratado.
          </p>
        </Reveal>
        <Reveal eager delay={160}>
          <div className="mt-9 flex w-full flex-col items-center px-4 sm:px-0">
            <Button
              asChild
              size="lg"
              className="hero-cta-glow w-full max-w-xs rounded-full bg-[#1D4ED8] px-6 py-6 text-base font-bold text-white shadow-[0_12px_40px_-6px_rgba(29,78,216,0.75)] ring-1 ring-white/10 transition-all duration-300 ease-out hover:scale-[1.04] hover:bg-[#1E40AF] hover:shadow-[0_18px_50px_-8px_rgba(29,78,216,0.9)] sm:w-auto sm:max-w-none sm:px-12 sm:py-7 sm:text-xl"
            >
              <a href="#precos">
                Quero meu diagnóstico →
              </a>
            </Button>
          </div>
        </Reveal>
        <Reveal eager delay={200}>
          <div className="mt-11 flex w-full max-w-full flex-col items-center justify-center gap-2 text-center text-xs font-semibold text-cta sm:mt-12 sm:w-auto sm:max-w-xl sm:flex-row sm:gap-3 sm:text-sm">
            <div className="flex -space-x-2.5">
              {[depo1, depo2, depo3, depo4, depo5].map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt=""
                  width={28}
                  height={28}
                  decoding="async"
                  className="size-6 shrink-0 rounded-full border-2 border-background object-cover transition-transform duration-300 ease-out hover:z-10 hover:scale-125 sm:size-7"
                />
              ))}
            </div>
            <span className="flex items-center justify-center gap-1.5 sm:gap-2">
              <Star className="size-3.5 shrink-0 fill-current sm:size-4" />
              <span>+587 contratados</span>
            </span>
          </div>
        </Reveal>

        <Reveal eager delay={240}>
          <div className="mt-10 w-full sm:mt-12">
            <p className="text-xs font-semibold text-muted-foreground sm:text-sm">
              Prepare-se para oportunidades nas principais empresas e plataformas do mercado
            </p>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-8 px-2 opacity-80 sm:gap-10">
              {marketCompanies.map((c) => (
                <li key={c.name} className="flex items-center">
                  <img
                    src={c.logo}
                    alt={c.name}
                    width={c.width}
                    height={c.height}
                    loading="lazy"
                    decoding="async"
                    className="h-9 w-auto object-contain sm:h-11"
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------- Funcionalidades -------------------------- */

const analysisBlocks = [
  {
    badge: "💼 PERFIL + LINKEDIN",
    icon: Briefcase,
    title: "Seu perfil precisa trabalhar a seu favor",
    text: "A IA analisa seu posicionamento profissional, perfil, resumo, experiência e palavras-chave para identificar o que pode estar impedindo você de aparecer nas buscas dos recrutadores.",
    problems: [
      "Título genérico",
      "Palavras-chave ausentes",
      "Experiências sem resultados",
      "Perfil pouco otimizado",
    ],
    cardClass: "border-[#b9d6ff] bg-[#e7f0ff] shadow-[0_10px_22px_rgba(37,99,235,0.16)]",
    iconClass: "bg-[#2563eb] text-white",
    badgeClass: "bg-[#d7e7ff] text-[#1d4ed8]",
  },
  {
    badge: "📄 CURRÍCULO",
    icon: FileText,
    title: "Seu currículo precisa passar pela primeira triagem",
    text: "Analisamos seu currículo e identificamos pontos que podem prejudicar sua apresentação e sua leitura por sistemas de triagem e recrutadores.",
    problems: [
      "Resumo pouco estratégico",
      "Formatação inadequada",
      "Falta de palavras-chave",
      "Experiências sem resultados claros",
    ],
    cardClass: "border-[#9cefc8] bg-[#ddfaeb] shadow-[0_10px_22px_rgba(5,150,105,0.16)]",
    iconClass: "bg-[#059669] text-white",
    badgeClass: "bg-[#c9f7df] text-[#047857]",
  },
];

const plusItems = ["LinkedIn otimizado", "Gupy", "Indeed", "Maiores plataformas de emprego", "Comunidade de vagas", "Acompanhamento até conseguir emprego"];

function ProblemsPreview({ items }: { items: string[] }) {
  return (
    <div
      className="w-full rounded-xl border border-black/5 bg-white p-4 shadow-lg sm:p-5"
      role="img"
      aria-label={`Exemplo de pontos analisados: ${items.join(", ")}`}
    >
      <p className="text-[11px] font-bold tracking-wide text-slate-500 uppercase">
        Exemplos de pontos analisados
      </p>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/70 p-2.5"
          >
            <span className="grid size-6 shrink-0 place-items-center rounded-md bg-[#fff1e6] text-[#c2410c]">
              <AlertTriangle className="size-3.5" />
            </span>
            <p className="text-xs leading-snug font-semibold text-slate-700 sm:text-sm">{item}</p>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-center text-[10px] text-slate-400">
        Exemplo ilustrativo de pontos analisados
      </p>
    </div>
  );
}

export function Features() {
  return (
    <section id="funcionalidades" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.23),transparent_72%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-balance sm:text-3xl lg:text-4xl">
            Não basta ter um bom currículo.{" "}
            <span className="text-primary">Você precisa ser encontrado.</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:mt-3 sm:text-base">
            Analisamos como você está se apresentando para o mercado e mostramos exatamente onde
            melhorar para aumentar suas chances de aparecer nas buscas e encontrar oportunidades.
          </p>
        </Reveal>

        <div className="mt-12 space-y-7">
          {analysisBlocks.map((b) => (
            <Reveal key={b.title}>
              <article
                className={`card-hover flex flex-col items-center gap-5 rounded-[1.5rem] border p-5 backdrop-blur-sm sm:p-7 lg:grid lg:items-center lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 ${b.cardClass}`}
              >
                <div className="w-full py-1 sm:py-2 lg:justify-self-start">
                  <span className={`grid size-12 place-items-center rounded-xl shadow-sm ${b.iconClass}`}>
                    <b.icon className="size-6" />
                  </span>
                  <p
                    className={`mt-4 inline-flex rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase ${b.badgeClass}`}
                  >
                    {b.badge}
                  </p>
                  <h3 className="mt-3 text-2xl leading-tight font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                    {b.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-700 sm:text-base">{b.text}</p>
                </div>
                <div className="w-full">
                  <ProblemsPreview items={b.problems} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Diferencial do Plus */}
        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-[1.5rem] border-2 border-[#c4b5fd] bg-gradient-to-br from-[#f6f2ff] to-[#ece2ff] p-6 pt-8 shadow-[0_16px_40px_rgba(124,58,237,0.18)] sm:p-9 sm:pt-10">
            <span className="absolute top-5 left-6 rounded-full bg-[#7c3aed] px-4 py-1.5 text-[11px] font-extrabold tracking-wide text-white uppercase shadow-[0_8px_18px_rgba(124,58,237,0.4)] sm:left-9">
              Diagnóstico Plus
            </span>
            <div className="flex flex-col gap-6 pt-8 sm:pt-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
              <div className="max-w-lg">
                <span className="grid size-12 place-items-center rounded-xl bg-[#7c3aed] text-white shadow-sm">
                  <Sparkles className="size-6" />
                </span>
                <h3 className="mt-4 text-2xl leading-tight font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                  Quer ir além do diagnóstico?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                  No Plus, você não recebe apenas uma análise. Você recebe uma estrutura para
                  começar a procurar oportunidades de forma mais completa.
                </p>
              </div>
              <ul className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2 lg:max-w-md">
                {plusItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-[#d9cbff] bg-white/70 px-3.5 py-2.5 text-sm font-semibold text-[#4c1d95] shadow-sm sm:text-base"
                  >
                    <Check className="size-4 shrink-0 text-[#7c3aed]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Transição para preços */}
        <Reveal className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
            Você pode começar entendendo exatamente o que precisa melhorar — ou já sair com uma
            estratégia mais completa para buscar oportunidades.
          </p>
          <p className="mt-2 text-base font-bold text-slate-950 sm:text-lg">
            Escolha o nível de acompanhamento que faz sentido para você.
          </p>
        </Reveal>
      </div>
      <SectionDivider />
    </section>
  );
}

/* -------------------------------- Prova social ---------------------------- */

const whatsappTestimonials = [
  { name: "Camila Ribeiro", photo: depo1, date: "29 de julho de 2026", image: chatCamila, width: 739, height: 1395 },
  { name: "Lucas Ferreira", photo: depo2, date: "8 de janeiro de 2026", image: chatLucas, width: 739, height: 1395 },
  { name: "Adriana Souza", photo: depo3, date: "5 de fevereiro de 2025", image: chatAdriana, width: 739, height: 1395 },
  { name: "Rafael Martins", photo: depo4, date: "15 de dezembro de 2024", image: chatRafael, width: 739, height: 1395 },
  { name: "Claudia Almeida", photo: depo5, date: "20 de março de 2026", image: chatClaudia, width: 739, height: 1395 },
];

export function SocialProof() {
  return (
    <section id="depoimentos" className="relative overflow-x-hidden pt-20 pb-24 sm:pt-28 sm:pb-36 lg:flex lg:min-h-screen lg:items-center">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_center,rgba(147,197,253,0.18),transparent_72%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Quem já fez, recomenda
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:mt-3 sm:text-base">
            Conversas reais de clientes, direto do WhatsApp.
          </p>
        </Reveal>

        <ul className="testimonial-scroll mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 py-3 pb-8 sm:gap-6 md:gap-7">
          {whatsappTestimonials.map((t, i) => (
            <Reveal
              as="li"
              key={t.name}
              delay={i * 90}
              className="w-[80vw] max-w-[300px] shrink-0 snap-start sm:w-[320px] md:w-[340px] lg:w-[360px]"
            >
              <figure className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border border-[#cfe0ff] bg-white shadow-[0_12px_28px_rgba(37,99,235,0.12)]">
                <figcaption className="flex items-center gap-3 px-5 py-4">
                  <img
                    src={t.photo}
                    alt={`Foto de ${t.name}`}
                    width={96}
                    height={96}
                    loading="lazy"
                    decoding="async"
                    className="size-11 shrink-0 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <span className="min-w-0">
                    <span className="block truncate font-bold text-slate-950">{t.name}</span>
                    <span className="block truncate text-xs text-slate-500">{t.date}</span>
                  </span>
                </figcaption>
                <img
                  src={t.image}
                  alt={`Print de conversa real no WhatsApp com ${t.name}`}
                  width={t.width}
                  height={t.height}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto"
                />
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
    name: "Diagnóstico Básico",
    href: "https://pay.cakto.com.br/ok9npdx_1015278",
    gaItemId: "diagnostico_basico",
    originalPrice: "R$57,97",
    price: "R$19,97",
    priceValue: 19.97,
    savings: "Você economiza R$38,00",
    icon: Linkedin,
    cardClass: "border-[#a9ccff] bg-[#edf5ff]",
    iconClass: "bg-[#dcecff] text-[#1d70d6]",
    priceClass: "text-[#1d70d6]",
    savingsClass: "bg-[#dce9ff] text-[#155bb0]",
    savingsSizeClass: "px-2.5 py-0.5 text-xs",
    buttonClass: "bg-[#1d70d6] text-white hover:bg-[#155bb0] shadow-[0_16px_36px_-10px_rgba(29,112,214,0.6)]",
    items: [
      "Análise do perfil, resumo e experiência",
      "Dicas pra aparecer mais em buscas",
      "Pontos fortes e pontos fracos",
      "Plano de ação prático em PDF",
    ],
    cta: "Quero garantir",
    highlight: false,
    badge: null as string | null,
  },
  {
    name: "Diagnóstico Plus",
    href: "https://pay.cakto.com.br/3aay2uu_1015307",
    gaItemId: "diagnostico_plus",
    originalPrice: "R$97,57" as string | null,
    price: "R$49,97",
    priceValue: 49.97,
    savings: "Você economiza R$48,00" as string | null,
    icon: Sparkles,
    cardClass: "border-[#c4b5fd] bg-[#f6f2ff]",
    iconClass: "bg-[#ece2ff] text-[#7c3aed]",
    priceClass: "text-[#6d28d9]",
    savingsClass: "bg-[#ece2ff] text-[#6d28d9]",
    savingsSizeClass: "px-3 py-1 text-sm",
    buttonClass: "bg-[#7c3aed] text-white hover:bg-[#6d28d9] shadow-[0_16px_36px_-10px_rgba(124,58,237,0.6)]",
    items: [
      "Diagnóstico completo do perfil",
      "LinkedIn",
      "Gupy",
      "Indeed",
      "Cadastro nas maiores plataformas de emprego",
      "Acesso à comunidade de vagas",
      "Acompanhamento até conseguir emprego",
    ],
    cta: "Quero o Plus",
    highlight: true,
    badge: "MAIS COMPLETO" as string | null,
  },
];

const PROMO_START = 30;

function usePromoCountdown(start: number) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => (prev > 1 ? prev - 1 : 1));
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return count;
}

function PromoCounterBadge() {
  const count = usePromoCountdown(PROMO_START);

  return (
    <div className="mx-auto flex w-fit max-w-full items-center gap-2 rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#7c3aed] px-4 py-2.5 text-center shadow-[0_12px_32px_-8px_rgba(76,29,149,0.45)] sm:gap-2.5 sm:px-6 sm:py-3">
      <p className="text-xs font-extrabold tracking-tight text-white sm:text-sm md:text-base">
        👥 Próximos{" "}
        <span className="inline-block min-w-[1.5em] text-center tabular-nums">{count}</span>{" "}
        usuários com desconto
      </p>
    </div>
  );
}

export function Pricing() {
  return (
    <>
      <section id="precos" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 lg:flex lg:min-h-screen lg:items-center">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.16),transparent_72%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
          <Reveal className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
              Escolha seu diagnóstico
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:mt-3 sm:text-base">
              Pagamento único. Sem assinatura, sem pegadinha.
            </p>
          </Reveal>

          <Reveal className="mx-auto mt-6 flex w-full max-w-4xl justify-center px-2 sm:mt-8 sm:px-0">
            <PromoCounterBadge />
          </Reveal>

          <ul className="mx-auto mt-12 grid w-full max-w-4xl items-stretch grid-cols-1 gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2">
            {plans.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 120} className="h-full w-full">
                <div
                  className={`card-hover relative flex h-full flex-col rounded-[2rem] border-2 p-6 shadow-[0_16px_40px_rgba(37,99,235,0.14)] sm:p-8 md:p-10 ${p.cardClass} ${
                    p.highlight ? "border-[#7c3aed] shadow-[0_20px_48px_rgba(124,58,237,0.22)] lg:scale-[1.04]" : ""
                  }`}
                >
                  {p.badge && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#7c3aed] px-4 py-1.5 text-[11px] font-extrabold tracking-wide text-white uppercase shadow-[0_8px_18px_rgba(124,58,237,0.4)]">
                      {p.badge}
                    </span>
                  )}
                  <span className={`grid size-14 place-items-center rounded-2xl ${p.iconClass}`}>
                    <p.icon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight">{p.name}</h3>

                  <div className="mt-5 flex items-baseline gap-2.5">
                    {p.originalPrice && (
                      <span className="text-base font-medium text-muted-foreground line-through">
                        {p.originalPrice}
                      </span>
                    )}
                    <span className={`text-5xl font-extrabold tracking-tight ${p.priceClass}`}>{p.price}</span>
                  </div>
                  {p.savings && (
                    <p
                      className={`mt-5 inline-flex w-fit items-center rounded-full font-bold ${p.savingsSizeClass} ${p.savingsClass}`}
                    >
                      {p.savings}
                    </p>
                  )}

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
                    {p.href ? (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          trackInitiateCheckout({
                            content_name: p.name,
                            currency: "BRL",
                            value: p.priceValue,
                          });
                          trackBeginCheckout({
                            currency: "BRL",
                            value: p.priceValue,
                            items: [
                              {
                                item_id: p.gaItemId,
                                item_name: p.name,
                                price: p.priceValue,
                                quantity: 1,
                              },
                            ],
                          });
                        }}
                      >
                        {p.cta}
                      </a>
                    ) : (
                      <span
                        role="button"
                        aria-disabled="true"
                        className="cursor-not-allowed opacity-80"
                        onClick={(e) => e.preventDefault()}
                      >
                        {p.cta}
                      </span>
                    )}
                  </Button>
                  <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-sm font-semibold text-slate-600">
                    <ShieldIcon className="size-4 text-primary" />
                    Garantia de satisfação
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          {/* Elementos de segurança */}
          <Reveal className="mx-auto mt-8 w-full flex max-w-3xl flex-wrap items-center justify-center gap-2 px-2 sm:px-0 sm:gap-3 md:gap-4">
            <span className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-2 text-[11px] font-semibold text-slate-600 shadow-sm sm:px-4 sm:text-xs md:text-sm">
              <Lock className="size-3.5 sm:size-4 text-primary shrink-0" />
              <span className="whitespace-nowrap">Ambiente seguro</span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-2 text-[11px] font-semibold text-slate-600 shadow-sm sm:px-4 sm:text-xs md:text-sm">
              <CreditCard className="size-3.5 sm:size-4 text-primary shrink-0" />
              <span className="whitespace-nowrap">Pix, débito ou crédito</span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-3 py-2 text-[11px] font-semibold text-slate-600 shadow-sm sm:px-4 sm:text-xs md:text-sm">
              <ShieldIcon className="size-3.5 sm:size-4 text-primary shrink-0" />
              <span className="whitespace-nowrap">Sem senha</span>
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
    <section id="perguntas" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.2),transparent_72%)]" />
      <div className="relative mx-auto w-full max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:mt-3 sm:text-base">
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
      </div>
    </section>
  );
}

/* --------------------------------- Rodapé --------------------------------- */

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#dbe7ff] pt-12 pb-6 sm:pt-16 sm:pb-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.13),transparent_70%)]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid w-full grid-cols-1 gap-8 sm:gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16 lg:grid-cols-[1.6fr_1fr]">
          {/* Marca */}
          <div className="w-full max-w-md">
            <div className="flex min-w-0 items-center gap-2.5">
              <img
                src={mascote}
                alt="Mascote do Diagnóstico AI"
                width={44}
                height={44}
                loading="lazy"
                decoding="async"
                className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
              />
              <span className="truncate text-lg font-extrabold tracking-tight text-primary sm:text-xl">
                Diagnóstico AI
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-5">
              Um diagnóstico simples do seu Instagram, LinkedIn e currículo, feito por inteligência
              artificial, com um plano prático pra você crescer.
            </p>

            <div className="mt-6 flex items-center gap-3 sm:mt-7">
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
          <nav className="w-full md:justify-self-end">
            <p className="text-xs font-bold tracking-[0.14em] text-foreground/80 uppercase">
              Institucional
            </p>
            <ul className="mt-4 space-y-2.5 text-sm sm:mt-5 sm:space-y-3">
              {[
                { label: "Sobre", href: "#topo" },
                { label: "Contato", href: "https://wa.me/5511932152540" },
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

        <div className="mt-12 flex flex-col gap-2.5 border-t border-[#e6eeff] pt-6 text-[11px] text-muted-foreground sm:mt-14 sm:gap-3 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <p>© {new Date().getFullYear()} Diagnóstico AI. Todos os direitos reservados.</p>
          <p className="hidden sm:block">Feito no Brasil, com inteligência artificial.</p>
        </div>
      </div>
    </footer>
  );
}
