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
  Sparkles,
  ShieldCheck as ShieldIcon,
  Star,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import mascote from "@/assets/mascote.png.asset.json";
import featIg from "@/assets/feature-instagram.jpg";
import featIn from "@/assets/feature-linkedin.jpg";
import featCv from "@/assets/feature-curriculo.jpg";
import depo1 from "@/assets/depo-1.jpg";
import depo2 from "@/assets/depo-2.jpg";
import depo3 from "@/assets/depo-3.jpg";
import depo4 from "@/assets/depo-4.jpg";
import depo5 from "@/assets/depo-5.jpg";

/* ---------------------------------- Hero --------------------------------- */

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-24"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <img
            src={mascote.url}
            alt="Robozinho mascote do Diagnóstico AI segurando uma lupa"
            width={140}
            height={140}
            className="mx-auto mb-6 h-24 w-24 object-contain sm:h-32 sm:w-32"
          />
        </Reveal>
        <Reveal delay={80}>
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-5xl">
            Sua rede social pode estar afastando oportunidades —{" "}
            <span className="text-primary">e você nem sabe disso</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Receba um diagnóstico completo do seu Instagram e LinkedIn, feito por inteligência
            artificial, com um plano prático pra melhorar. Em minutos, por R$19,97.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-cta px-7 text-base font-semibold text-cta-foreground shadow-[var(--shadow-cta)] transition-transform hover:scale-[1.03] hover:bg-cta-hover"
            >
              <a href="#precos">
                <Instagram className="size-5" /> Diagnóstico do Instagram
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-cta px-7 text-base font-semibold text-cta transition-transform hover:scale-[1.03] hover:bg-cta-soft"
            >
              <a href="#precos">
                <Linkedin className="size-5" /> Diagnóstico do LinkedIn
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Quer os dois?{" "}
            <a href="#precos" className="font-semibold text-cta underline underline-offset-4">
              Veja o combo completo
            </a>
          </p>
          <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-cta-soft px-4 py-2 text-sm font-medium text-cta">
            🚀 Lançamento oficial — seja um dos primeiros a testar
          </div>
        </Reveal>
      </div>
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
    text: "R$19,97, pagamento único, sem assinatura.",
  },
  {
    icon: FileText,
    title: "Receba seu diagnóstico",
    text: "Em minutos, um relatório com pontos fortes, pontos fracos e o que fazer pra melhorar.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">Como funciona</h2>
          <p className="mt-3 text-muted-foreground">Três passos simples. Sem complicação.</p>
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120}>
              <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <s.icon className="size-5" />
                  </span>
                  <span className="text-sm font-bold text-primary/70">Passo {i + 1}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------- Funcionalidades -------------------------- */

const blocks = [
  {
    badge: "🔍 DIAGNÓSTICO INSTAGRAM",
    icon: Search,
    title: "Análise completa do seu Instagram",
    text: "A IA analisa sua foto de perfil, bio, posts e engajamento, e mostra o que está afastando seguidores e oportunidades.",
    cta: "Diagnosticar meu Instagram",
    img: featIg,
    alt: "Ilustração de um celular com perfil de rede social sendo analisado",
    bg: "bg-primary-softer",
  },
  {
    badge: "💼 DIAGNÓSTICO LINKEDIN",
    icon: Briefcase,
    title: "Análise completa do seu LinkedIn",
    text: "A IA revisa seu perfil, resumo e experiência, e aponta o que fazer pra aparecer mais em buscas de recrutadores.",
    cta: "Diagnosticar meu LinkedIn",
    img: featIn,
    alt: "Ilustração de um notebook com perfil profissional sendo analisado",
    bg: "bg-muted",
  },
  {
    badge: "📄 CURRÍCULO",
    icon: FileText,
    title: "Seu currículo também entra na análise",
    text: "Envie seu currículo em PDF junto e receba dicas específicas de como melhorá-lo para as áreas que você busca.",
    cta: "Saiba mais",
    img: featCv,
    alt: "Ilustração de um currículo em PDF com checklist e lápis",
    bg: "bg-primary-soft",
  },
];

export function Features() {
  return (
    <section id="funcionalidades" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
            Conheça o que você recebe
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ferramentas simples que mostram exatamente o que ajustar pra sua rede social atrair
            mais oportunidades
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {blocks.map((b, i) => (
            <Reveal key={b.title}>
              <article
                className={`grid items-center gap-8 rounded-[2rem] ${b.bg} p-7 sm:p-10 md:grid-cols-2`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                    <b.icon className="size-6" />
                  </span>
                  <p className="mt-5 text-xs font-bold tracking-widest text-primary uppercase">
                    {b.badge}
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">{b.title}</h3>
                  <p className="mt-3 text-muted-foreground">{b.text}</p>
                  <Button
                    asChild
                    size="lg"
                    className="mt-6 rounded-full px-6 font-semibold transition-transform hover:scale-[1.03]"
                  >
                    <a href="#precos">{b.cta}</a>
                  </Button>
                  <p className="mt-3 text-sm text-muted-foreground">★★★★★ produto em lançamento</p>
                </div>
                <img
                  src={b.img}
                  alt={b.alt}
                  width={900}
                  height={700}
                  loading="lazy"
                  className={`w-full rounded-2xl bg-background object-cover ${i % 2 === 1 ? "md:order-1" : ""}`}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Prova social ---------------------------- */

export function SocialProof() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="rounded-3xl bg-primary px-6 py-8 text-center text-primary-foreground sm:px-10">
            <p className="text-base font-semibold text-balance sm:text-lg">
              🎉 Você está entre os primeiros a experimentar o Diagnóstico AI. Em breve, essa seção
              vai mostrar os resultados reais de quem já usou.
            </p>
          </div>
        </Reveal>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal as="li" key={i} delay={i * 120}>
              <div className="h-full rounded-3xl border border-dashed border-border bg-card p-7">
                <div className="flex items-center gap-3">
                  <span className="size-11 rounded-full bg-muted" />
                  <span className="text-sm text-muted-foreground/60">Em breve</span>
                </div>
                <p className="mt-5 text-muted-foreground/60">Em breve</p>
                <div className="mt-4 space-y-2">
                  <span className="block h-3 w-full rounded-full bg-muted" />
                  <span className="block h-3 w-4/5 rounded-full bg-muted" />
                  <span className="block h-3 w-2/3 rounded-full bg-muted" />
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* --------------------------------- Preços --------------------------------- */

const plans = [
  {
    name: "Instagram",
    price: "R$19,97",
    icon: Instagram,
    items: [
      "Análise da foto de perfil e da bio",
      "Leitura dos seus posts e do engajamento",
      "Pontos fortes e pontos fracos",
      "Plano de ação prático em PDF",
    ],
    cta: "Quero esse",
    highlight: false,
  },
  {
    name: "LinkedIn",
    price: "R$19,97",
    icon: Linkedin,
    items: [
      "Análise do perfil, resumo e experiência",
      "Dicas pra aparecer mais em buscas",
      "Pontos fortes e pontos fracos",
      "Plano de ação prático em PDF",
    ],
    cta: "Quero esse",
    highlight: false,
  },
  {
    name: "Combo completo",
    price: "R$29,97",
    icon: Sparkles,
    items: [
      "Tudo do Instagram",
      "Tudo do LinkedIn",
      "Análise do seu currículo em PDF",
      "Plano de ação unindo tudo",
    ],
    cta: "Quero o combo",
    highlight: true,
  },
];

export function Pricing() {
  return (
    <>
      <Reveal>
        <div className="bg-primary px-4 py-4 text-center text-sm font-semibold text-primary-foreground sm:text-base">
          👥 Desconto de lançamento pros primeiros clientes
        </div>
      </Reveal>

      <section id="precos" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="text-center">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
              Escolha seu diagnóstico
            </h2>
            <p className="mt-3 text-muted-foreground">
              Pagamento único. Sem assinatura, sem pegadinha.
            </p>
          </Reveal>

          <ul className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 120} className="h-full">
                <div
                  className={`relative flex h-full flex-col rounded-3xl bg-card p-7 transition-transform duration-300 hover:-translate-y-1 ${
                    p.highlight
                      ? "border-2 border-primary shadow-[var(--shadow-lift)]"
                      : "border border-border shadow-[var(--shadow-soft)]"
                  }`}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                      Mais completo
                    </span>
                  )}
                  <span className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <p.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-3xl font-extrabold text-primary">{p.price}</p>
                  <ul className="mt-5 flex-1 space-y-3">
                    {p.items.map((it) => (
                      <li key={it} className="flex gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    size="lg"
                    variant={p.highlight ? "default" : "outline"}
                    className={`mt-7 w-full rounded-full font-semibold transition-transform hover:scale-[1.02] ${
                      p.highlight ? "" : "border-2 border-primary text-primary hover:bg-primary-soft"
                    }`}
                  >
                    <a href="#topo">{p.cta}</a>
                  </Button>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
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
    a: "Pode. Você começa por um e compra o outro quando quiser. Se já sabe que quer os dois, o combo sai mais em conta.",
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
    <section id="perguntas" className="bg-primary-softer py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
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
                className="rounded-2xl border border-border bg-card px-5"
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
            className="mt-4 rounded-full px-7 font-semibold transition-transform hover:scale-[1.03]"
          >
            <a href="https://wa.me/" target="_blank" rel="noreferrer">
              <MessageCircle className="size-5" /> Falar no WhatsApp
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Rodapé --------------------------------- */

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex min-w-0 items-center gap-2">
              <img
                src={mascote.url}
                alt="Mascote do Diagnóstico AI"
                width={40}
                height={40}
                loading="lazy"
                className="h-10 w-10 shrink-0 object-contain"
              />
              <span className="text-lg font-extrabold text-primary">Diagnóstico AI</span>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Um diagnóstico simples do seu Instagram, LinkedIn e currículo, feito por inteligência
              artificial, com um plano prático pra você crescer.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram do Diagnóstico AI"
                className="grid size-10 place-items-center rounded-full bg-primary-soft text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn do Diagnóstico AI"
                className="grid size-10 place-items-center rounded-full bg-primary-soft text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="size-5" />
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:flex-col md:items-end">
            {["Sobre", "Contato", "Política de privacidade", "Termos de uso"].map((l) => (
              <a
                key={l}
                href="#topo"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Diagnóstico AI. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}