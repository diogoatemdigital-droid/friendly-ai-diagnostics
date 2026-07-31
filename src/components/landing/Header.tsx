import mascote from "@/assets/mascote.png.asset.json";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#funcionalidades", label: "Como funciona" },
  { href: "#funcionalidades", label: "Funcionalidades" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E8E8E8] bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-6 py-3 sm:px-12">
        <a href="#topo" className="flex min-w-0 items-center gap-2">
          <img
            src={mascote.url}
            alt="Mascote do Diagnóstico AI"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
          />
          <span className="truncate text-base font-bold tracking-tight sm:text-lg">
            Diagnóstico AI
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-sec-blue"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          size="sm"
          className="shrink-0 rounded-md px-5 font-semibold text-primary-foreground"
          style={{ background: "var(--sec-blue)" }}
        >
          <a href="#cta">Começar agora</a>
        </Button>
      </div>
    </header>
  );
}
