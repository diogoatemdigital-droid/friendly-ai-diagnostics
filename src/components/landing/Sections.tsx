import { Check, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import mascote from "@/assets/mascote.png.asset.json";
import featIg from "@/assets/feature-instagram.jpg";
import featIn from "@/assets/feature-linkedin.jpg";
import featCv from "@/assets/feature-curriculo.jpg";
import depo1 from "@/assets/depo-1.jpg";
import depo2 from "@/assets/depo-2.jpg";
import depo3 from "@/assets/depo-3.jpg";

/* ---------------------------------- Hero --------------------------------- */

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-12">
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
          <h1 className="text-[2rem] leading-[1.2] font-bold tracking-tight text-balance sm:text-5xl">
            Descubra o que está matando suas{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--grad-cta)" }}
            >
              oportunidades no LinkedIn e no Instagram
            </span>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.8] text-muted-foreground">
            Receba um diagnóstico completo feito por inteligência artificial, com um plano prático
            para melhorar — em minutos.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
            <span className="flex items-center gap-0.5 text-sec-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            <span className="text-muted-foreground">Amado por mais de 300 usuários</span>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-md px-8 text-base font-bold text-primary-foreground shadow-[var(--shadow-lift)]"
              style={{ background: "var(--sec-blue)" }}
            >
              <a href="#cta">Começar Diagnóstico Agora</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Color sections ---------------------------- */

type SectionData = {
  id?: string;
  title: string;
  text: string;
  features: string[];
  gradient: string;
  accent: string;
  image: string;
  reverse: boolean;
};

const sections: SectionData[] = [
  {
    id: "funcionalidades",
    title: "Análise Profunda com IA",
    text: "Nossa inteligência artificial analisa cada aspecto do seu perfil profissional, desde a foto até a descrição bio, gerando insights que você nunca pensaria sozinho.",
    features: [
      "Análise de 50+ pontos críticos",
      "Comparação com perfis top",
      "Recomendações personalizadas",
    ],
    gradient: "var(--grad-sec-1)",
    accent: "var(--sec-blue)",
    image: featIn,
    reverse: false,
  },
  {
    title: "Plano Prático de Ação",
    text: "Não é só diagnóstico. Você recebe um plano passo-a-passo, priorizado por impacto, que você consegue executar em poucas horas.",
    features: [
      "Ações ordenadas por prioridade",
      "Exemplos práticos prontos",
      "Estimativa de tempo real",
    ],
    gradient: "var(--grad-sec-2)",
    accent: "var(--sec-green)",
    image: featCv,
    reverse: true,
  },
  {
    title: "Resultados Comprovados",
    text: "Usuários que seguem as recomendações reportam aumento de 40-60% em visualizações de perfil e 3-5x mais entrevistas em 30 dias.",
    features: [
      "Mais visualizações garantidas",
      "Mais match com recrutadores",
      "Aumento de oportunidades reais",
    ],
    gradient: "var(--grad-sec-3)",
    accent: "var(--sec-orange)",
    image: featIg,
    reverse: false,
  },
  {
    title: "Acesso Vitalício",
    text: "Pague uma única vez e tenha acesso para sempre. Sem mensalidades, sem surpresas. Seus diagnósticos atualizados sempre que você quiser revisar.",
    features: [
      "Pagamento único e garantido",
      "Atualizações futuras inclusas",
      "Suporte por WhatsApp",
    ],
    gradient: "var(--grad-sec-4)",
    accent: "var(--sec-purple)",
    image: featCv,
    reverse: true,
  },
  {
    title: "Segurança dos Seus Dados",
    text: "Seus dados são encriptados e protegidos com os melhores padrões de segurança. A privacidade é nossa prioridade máxima.",
    features: ["Encriptação 256-bit", "LGPD compliant", "Sem compartilhamento de dados"],
    gradient: "var(--grad-sec-5)",
    accent: "var(--sec-pink)",
    image: featIn,
    reverse: false,
  },
  {
    title: "Suporte Garantido",
    text: "Equipe de suporte disponível via WhatsApp para responder suas dúvidas e ajudar você a tirar o máximo do diagnóstico.",
    features: ["Resposta em até 1 hora", "Disponível segunda a sexta", "Atendimento personalizado"],
    gradient: "var(--grad-sec-6)",
    accent: "var(--sec-gold)",
    image: featIg,
    reverse: true,
  },
];

function ColorSection({ data }: { data: SectionData }) {
  return (
    <section
      id={data.id}
      className="px-6 py-16 sm:px-12"
      style={{ background: data.gradient, borderTop: `3px solid ${data.accent}` }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <Reveal className={data.reverse ? "md:order-1" : "md:order-2"}>
          <div className="overflow-hidden rounded-xl bg-background/60 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
            <img
              src={data.image}
              alt={data.title}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={80} className={data.reverse ? "md:order-2" : "md:order-1"}>
          <h2 className="text-[2rem] leading-[1.3] font-bold tracking-tight">{data.title}</h2>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground">{data.text}</p>
          <ul className="mt-6 space-y-3">
            {data.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-[0.95rem]">
                <span
                  className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: data.accent }}
                >
                  <Check className="size-3.5 text-background" strokeWidth={3} />
                </span>
                <span style={{ color: data.accent }} className="font-semibold">
                  {f}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function ColorJourney() {
  return (
    <>
      {sections.map((s) => (
        <ColorSection key={s.title} data={s} />
      ))}
    </>
  );
}

/* ------------------------------- Depoimentos ------------------------------ */

const depoimentos = [
  {
    nome: "Mariana Costa",
    cargo: "Analista de Marketing",
    foto: depo1,
    texto:
      "O diagnóstico apontou exatamente o que estava travando meu perfil. Em duas semanas triplicaram as visualizações.",
  },
  {
    nome: "Rafael Lima",
    cargo: "Desenvolvedor",
    foto: depo2,
    texto:
      "O plano de ação é objetivo e fácil de seguir. Recebi três convites de recrutadores no primeiro mês.",
  },
  {
    nome: "Juliana Alves",
    cargo: "Designer",
    foto: depo3,
    texto:
      "Valeu cada centavo. Descobri erros na bio e nos destaques que eu nunca teria percebido sozinha.",
  },
];

export function Depoimentos() {
  return (
    <section id="depoimentos" className="px-6 py-16 sm:px-12" style={{ background: "#FAFBFC" }}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center text-[2rem] leading-[1.3] font-bold tracking-tight text-balance">
            1.000+ profissionais já transformaram suas carreiras
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <Reveal
              key={d.nome}
              delay={i * 80}
              className="rounded-xl border border-[#E0E0E0] bg-card p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            >
              <span className="flex items-center gap-0.5 text-sec-gold">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </span>
              <p className="mt-4 text-[0.95rem] leading-[1.8] text-muted-foreground">“{d.texto}”</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={d.foto}
                  alt={d.nome}
                  loading="lazy"
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold">{d.nome}</p>
                  <p className="text-xs text-muted-foreground">{d.cargo}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- CTA final ------------------------------- */

export function FinalCta() {
  return (
    <section id="cta" className="px-6 py-16 sm:px-12" style={{ background: "var(--grad-cta)" }}>
      <div className="mx-auto max-w-3xl text-center text-primary-foreground">
        <Reveal>
          <h2 className="text-[2rem] leading-[1.3] font-bold tracking-tight text-balance">
            Pronto para transformar seu perfil?
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-4 max-w-xl text-base leading-[1.8] opacity-90">
            Obtenha seu diagnóstico completo em 5 minutos. Sem complicação. Sem surpresas.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-md bg-background px-8 text-base font-bold hover:bg-background/90"
              style={{ color: "var(--sec-blue)" }}
            >
              <a href="#topo">Começar Diagnóstico Agora</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Footer --------------------------------- */

export function Footer() {
  return (
    <footer className="border-t border-[#E8E8E8] bg-background px-6 py-10 sm:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <img src={mascote.url} alt="" width={32} height={32} className="size-8 object-contain" />
          <span className="font-bold">Diagnóstico AI</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Diagnóstico AI. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
