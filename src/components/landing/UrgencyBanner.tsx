import { Flame } from "lucide-react";

export function UrgencyBanner() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] bg-cta text-cta-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-bold sm:text-sm">
        <Flame className="size-4 shrink-0 animate-pulse" />
        <span>Últimas vagas com desconto de lançamento — R$19,97</span>
      </div>
    </div>
  );
}