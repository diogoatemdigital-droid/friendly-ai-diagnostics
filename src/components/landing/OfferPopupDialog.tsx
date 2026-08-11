import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const OFFER_WHATSAPP_URL =
  "https://wa.me/5511932152540?text=Ol%C3%A1%2C%20vi%20a%20oferta%20no%20site%20e%20quero%20saber%20sobre%20o%20desconto.";

export default function OfferPopupDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/60 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          aria-describedby="offer-popup-description"
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.3)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:max-w-md sm:p-8"
        >
          <DialogPrimitive.Close
            aria-label="Fechar"
            className="absolute right-3 top-3 grid size-9 place-items-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <X className="size-5" aria-hidden="true" />
          </DialogPrimitive.Close>

          <DialogPrimitive.Title className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            ESPERE! TEMOS UMA CONDIÇÃO ESPECIAL
          </DialogPrimitive.Title>
          <DialogPrimitive.Description
            id="offer-popup-description"
            className="mt-3 text-sm text-gray-600 sm:text-base"
          >
            Fale com a gente pelo WhatsApp e saiba se há uma condição disponível para você.
          </DialogPrimitive.Description>

          <a
            href={OFFER_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onOpenChange(false)}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_-8px_rgba(124,58,237,0.6)] transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 sm:text-base"
          >
            QUERO MEU DESCONTO
          </a>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
