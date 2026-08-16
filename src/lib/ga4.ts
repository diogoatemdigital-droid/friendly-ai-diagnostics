declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

type Ga4Item = {
  item_id: string;
  item_name: string;
  price: number;
  quantity: number;
};

type BeginCheckoutParams = {
  currency: string;
  value: number;
  items: Ga4Item[];
};

// Empurra direto na mesma fila (dataLayer) que o shim gtag() em __root.tsx usa,
// em vez de chamar window.gtag: assim o evento é enfileirado mesmo que o
// gtag.js real ainda não tenha carregado (carregamento lazy), e é processado
// assim que a fila for lida.
function pushToDataLayer(event: string, params: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["event", event, params]);
}

export function trackBeginCheckout(params: BeginCheckoutParams) {
  pushToDataLayer("begin_checkout", params);
}
