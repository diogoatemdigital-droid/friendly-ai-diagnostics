import {
  Outlet,
  Link,
  createRootRoute,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { WhatsAppFloatingButton } from "@/components/landing/WhatsAppFloatingButton";
import { OfferPopup } from "@/components/landing/OfferPopup";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Diagnóstico Perfil" },
      { name: "description", content: "Diagnóstico Perfil" },
      { name: "author", content: "Diagnóstico Perfil" },
      { property: "og:title", content: "Diagnóstico Perfil" },
      { property: "og:description", content: "Diagnóstico Perfil" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "facebook-domain-verification", content: "89xapohs8h5xnpnxmcd8la6ke0ja01" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      // Fonte auto-hospedada (mesmo arquivo variável do Google Fonts). O preload
      // dispara o download no primeiro RTT, junto com o CSS, em vez de esperar
      // duas conexões externas encadeadas.
      {
        rel: "preload",
        href: "/fonts/plus-jakarta-sans-latin.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/manifest.json" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const GA_MEASUREMENT_ID = "G-PVZL91T22D";
const META_PIXEL_ID = "884587751047573";
const CLARITY_PROJECT_ID = "xyepnw6sn3";

/*
 * Rastreamento: as FILAS (gtag/dataLayer, fbq, clarity) são criadas de forma
 * síncrona no <head>, exatamente como nos snippets oficiais, e os eventos de
 * PageView/config são disparados imediatamente. O que foi adiado é apenas o
 * DOWNLOAD dos scripts dos fornecedores (~300 KB de JS de terceiros), que antes
 * competia com o render inicial da página.
 *
 * Nenhum evento é perdido: gtag.js, fbevents.js e clarity.js processam as filas
 * já existentes assim que carregam. O carregamento ocorre no primeiro entre:
 *   1. qualquer interação do usuário (toque, clique, tecla, scroll) — imediato;
 *   2. evento `load` da página + primeiro período ocioso;
 *   3. 2,5 s após o parse do documento (rede de segurança para bounces rápidos).
 */
const TRACKING_SCRIPT = `
(function (w, d) {
  w.dataLayer = w.dataLayer || [];
  function gtag() { w.dataLayer.push(arguments); }
  w.gtag = w.gtag || gtag;
  gtag('js', new Date());
  gtag('config', '${GA_MEASUREMENT_ID}');

  w.clarity = w.clarity || function () { (w.clarity.q = w.clarity.q || []).push(arguments); };

  if (!w.fbq) {
    var n = w.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!w._fbq) w._fbq = n;
    n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
  }
  w.fbq('init', '${META_PIXEL_ID}');
  w.fbq('track', 'PageView');

  var done = false;
  var timer;
  var events = ['pointerdown', 'touchstart', 'keydown', 'wheel', 'scroll'];
  var opts = { passive: true, capture: true };

  function inject(src) {
    var s = d.createElement('script');
    s.async = true;
    s.src = src;
    d.head.appendChild(s);
  }

  function load() {
    if (done) return;
    done = true;
    for (var i = 0; i < events.length; i++) w.removeEventListener(events[i], load, opts);
    w.removeEventListener('load', onLoad);
    if (timer) w.clearTimeout(timer);
    inject('https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}');
    inject('https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}');
    inject('https://connect.facebook.net/en_US/fbevents.js');
  }

  function onLoad() {
    if (w.requestIdleCallback) w.requestIdleCallback(load, { timeout: 1000 });
    else w.setTimeout(load, 200);
  }

  for (var i = 0; i < events.length; i++) w.addEventListener(events[i], load, opts);
  if (d.readyState === 'complete') onLoad();
  else w.addEventListener('load', onLoad);
  timer = w.setTimeout(load, 2500);
})(window, document);
`;

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Google Analytics 4 + Microsoft Clarity + Meta Pixel (filas síncronas,
            download dos scripts adiado — ver TRACKING_SCRIPT) */}
        <script dangerouslySetInnerHTML={{ __html: TRACKING_SCRIPT }} />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <WhatsAppFloatingButton />
      <OfferPopup />
    </>
  );
}
