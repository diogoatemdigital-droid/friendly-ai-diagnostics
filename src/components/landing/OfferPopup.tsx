import { Suspense, lazy, useEffect, useState } from "react";

/*
 * O diálogo (e com ele o @radix-ui/react-dialog, ~62 KB) fica em um chunk
 * separado, carregado só quando o popup vai realmente aparecer — 10 s após a
 * entrada. Antes ele entrava no bundle inicial de toda visita.
 */
const OfferPopupDialog = lazy(() => import("./OfferPopupDialog"));

const SESSION_STORAGE_KEY = "offerPopupShown";
const SHOW_DELAY_MS = 10000;
const BLOCKED_PATH_KEYWORDS = ["checkout", "pagamento", "payment"];

export function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
    const isBlockedPath = BLOCKED_PATH_KEYWORDS.some((keyword) => path.includes(keyword));
    const alreadyShown = window.sessionStorage.getItem(SESSION_STORAGE_KEY) === "true";

    if (isBlockedPath || alreadyShown) return;

    const timer = window.setTimeout(() => {
      window.sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
      setIsMounted(true);
      setIsOpen(true);
    }, SHOW_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <Suspense fallback={null}>
      <OfferPopupDialog open={isOpen} onOpenChange={setIsOpen} />
    </Suspense>
  );
}
