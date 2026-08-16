import { Suspense, lazy, useEffect, useRef, useState } from "react";

/*
 * O diálogo (e com ele o @radix-ui/react-dialog, ~62 KB) fica em um chunk
 * separado, carregado só quando o popup vai realmente aparecer.
 * Antes ele entrava no bundle inicial de toda visita.
 */
const OfferPopupDialog = lazy(() => import("./OfferPopupDialog"));

const SESSION_STORAGE_KEY = "offerPopupShown";
const SHOW_DELAY_MS = 15000;
const BLOCKED_PATH_KEYWORDS = ["checkout", "pagamento", "payment"];
const HISTORY_BUFFER_STATE = { __offerPopupBuffer: true };

export function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const shownRef = useRef(false);

  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
    const isBlockedPath = BLOCKED_PATH_KEYWORDS.some((keyword) => path.includes(keyword));
    const alreadyShown = window.sessionStorage.getItem(SESSION_STORAGE_KEY) === "true";

    if (isBlockedPath || alreadyShown) return;

    function show() {
      if (shownRef.current) return;
      shownRef.current = true;
      window.sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
      setIsMounted(true);
      setIsOpen(true);
    }

    // 1) Timer: 15s após a entrada na página (não após interação).
    const timer = window.setTimeout(show, SHOW_DELAY_MS);

    // 2) Exit intent no desktop: cursor sai pela borda superior da janela,
    // em direção à barra de endereço/abas — sinal clássico de saída.
    function onMouseOut(e: MouseEvent) {
      if (e.clientY > 0 || e.relatedTarget) return;
      show();
    }
    document.addEventListener("mouseout", onMouseOut);

    // 3) "Exit intent" no mobile: não existe cursor, então usamos o botão
    // voltar do navegador (popstate) como sinal de intenção de saída — ele só
    // dispara numa navegação de volta real, nunca ao trocar de aba/app, o que
    // evita o popup aparecer de forma inesperada. Restrito a dispositivos sem
    // mouse (pointer: coarse) para não alterar o botão voltar no desktop, que
    // já tem o exit intent tradicional acima.
    const isTouchPrimary =
      typeof window.matchMedia === "function" && window.matchMedia("(pointer: coarse)").matches;
    let onPopState: (() => void) | undefined;
    if (isTouchPrimary) {
      window.history.pushState(HISTORY_BUFFER_STATE, "", window.location.href);
      onPopState = () => {
        if (shownRef.current) return;
        window.history.pushState(HISTORY_BUFFER_STATE, "", window.location.href);
        show();
      };
      window.addEventListener("popstate", onPopState);
    }

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onMouseOut);
      if (onPopState) window.removeEventListener("popstate", onPopState);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <Suspense fallback={null}>
      <OfferPopupDialog open={isOpen} onOpenChange={setIsOpen} />
    </Suspense>
  );
}
