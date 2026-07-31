import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export function FloatingCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#precos"
      className={`fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-cta px-5 py-3.5 text-sm font-bold text-cta-foreground shadow-[var(--shadow-cta)] transition-all duration-300 hover:bg-cta-hover sm:right-6 sm:bottom-6 sm:text-base ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <Sparkles className="size-5" />
      Quero meu diagnóstico
    </a>
  );
}