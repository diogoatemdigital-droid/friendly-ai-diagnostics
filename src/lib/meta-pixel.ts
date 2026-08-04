declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type FbqParams = Record<string, string | number | undefined>;

function track(event: string, params?: FbqParams) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq("track", event, params);
}

export function trackViewContent(params?: FbqParams) {
  track("ViewContent", params);
}

export function trackInitiateCheckout(params?: FbqParams) {
  track("InitiateCheckout", params);
}
