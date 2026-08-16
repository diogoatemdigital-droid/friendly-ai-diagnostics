import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Copy, X } from "lucide-react";
import mascote from "@/assets/logo-header.webp";
import { trackInitiateCheckout } from "@/lib/meta-pixel";
import { trackBeginCheckout } from "@/lib/ga4";

const COUPON_CODE = "EMPREGO26";
// Cupom aplicado direto na URL do checkout já existente do Diagnóstico Plus
// (suporte nativo da Cakto via ?coupon=). Requer que o cupom EMPREGO26 já
// esteja cadastrado no produto no painel da Cakto para o desconto valer.
const CHECKOUT_URL = `https://pay.cakto.com.br/3aay2uu_1015307?coupon=${COUPON_CODE}`;

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
          className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-[2rem] bg-white p-6 text-center shadow-[0_24px_70px_rgba(0,0,0,0.35)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:p-8"
        >
          <DialogPrimitive.Close
            aria-label="Fechar"
            className="absolute right-3 top-3 grid size-8 place-items-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <X className="size-4" aria-hidden="true" />
          </DialogPrimitive.Close>

          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 shadow-[0_8px_20px_rgba(29,78,216,0.18)] ring-4 ring-white">
            <img
              src={mascote}
              alt=""
              width={48}
              height={48}
              className="size-12 object-contain"
            />
          </div>

          <DialogPrimitive.Title className="mt-5 text-xl font-extrabold tracking-tight text-gray-900 sm:text-2xl">
            ESPERA! TEMOS UMA OFERTA ESPECIAL
          </DialogPrimitive.Title>
          <DialogPrimitive.Description
            id="offer-popup-description"
            className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base"
          >
            Use o cupom{" "}
            <span className="inline-flex items-center rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 px-2 py-0.5 font-mono font-bold tracking-wide text-blue-700">
              {COUPON_CODE}
            </span>{" "}
            para obter <span className="font-extrabold text-purple-700">5% de desconto</span>
          </DialogPrimitive.Description>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              onOpenChange(false);
              trackInitiateCheckout({
                content_name: "Diagnóstico Plus",
                currency: "BRL",
                value: 49.97,
              });
              trackBeginCheckout({
                currency: "BRL",
                value: 49.97,
                items: [
                  {
                    item_id: "diagnostico_plus",
                    item_name: "Diagnóstico Plus",
                    price: 49.97,
                    quantity: 1,
                  },
                ],
              });
            }}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_-8px_rgba(124,58,237,0.6)] transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 sm:text-base"
          >
            <Copy className="size-4" aria-hidden="true" />
            Aplicar Cupom
          </a>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
