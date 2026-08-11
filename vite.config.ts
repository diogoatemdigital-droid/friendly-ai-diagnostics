// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    build: {
      // Sem inlining de assets. As fotos de depoimento otimizadas ficam abaixo do
      // limite padrão de 4 KB e eram embutidas como data URI em base64 — repetidas
      // em cada lugar onde a mesma foto aparece, inflando o HTML em ~35 KB por
      // visita e sem qualquer cache. Como arquivos separados elas são ~12 KB no
      // total, com hash e cache de longa duração.
      assetsInlineLimit: 0,
    },
  },
});
