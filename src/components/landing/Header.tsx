import { useEffect, useState } from "react";
import mascote from "@/assets/logo-header.webp";
import { Button } from "@/components/ui/button";

const links = [
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
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 border-b border-border/60 px-4 py-2.5 sm:px-6 sm:py-3">
        <a
          href="#topo"
          className="flex min-w-0 flex-1 items-center gap-2 transition-transform duration-300 hover:scale-[1.03]"
        >
          <img
            src={mascote}
            alt="Mascote do Diagnóstico AI"
            width={40}
            height={40}
            fetchPriority="high"
            decoding="async"
            className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9 lg:h-10 lg:w-10"
          />
          <span className="truncate text-sm font-extrabold tracking-tight text-primary sm:text-base lg:text-lg">
            Diagnóstico AI
          </span>
        </a>

        <nav className="hidden items-center gap-5 md:gap-7 lg:flex lg:-translate-x-12">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium text-muted-foreground transition-colors hover:text-primary sm:text-sm"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Button
          asChild
          size="sm"
          className="shrink-0 whitespace-nowrap rounded-full bg-cta px-[14px] py-2 text-xs font-semibold text-cta-foreground transition-transform duration-300 hover:scale-[1.03] hover:bg-cta-hover sm:px-[18px] sm:py-2.5 sm:text-sm lg:px-[23px] lg:translate-x-[25px]"
        >
          <a href="#precos">Começar agora</a>
        </Button>
      </div>
    </header>
  );
}