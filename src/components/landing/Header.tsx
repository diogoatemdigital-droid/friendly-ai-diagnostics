import { useEffect, useState } from "react";
import mascote from "@/assets/colocaessa.png";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#precos", label: "Preços" },
  { href: "#perguntas", label: "Perguntas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[var(--shadow-soft)]" : "shadow-sm"
      }`}
    >
      <div className="h-2.5 w-full bg-white sm:h-3" />
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-border/60 px-4 py-3 sm:flex sm:justify-between sm:px-6">
        <a
          href="#topo"
          className="flex min-w-0 items-center gap-2 transition-transform duration-300 hover:scale-[1.03]"
        >
          <img
            src={mascote}
            alt="Mascote do Diagnóstico AI"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
          />
          <span className="truncate text-base font-extrabold tracking-tight text-primary sm:text-lg">
            Diagnóstico AI
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          size="sm"
          className="shrink-0 whitespace-nowrap rounded-full bg-cta px-4 font-semibold text-cta-foreground hover:bg-cta-hover sm:px-5"
        >
          <a href="#precos">Começar agora</a>
        </Button>
      </div>
    </header>
  );
}