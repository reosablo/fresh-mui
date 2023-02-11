import { IS_BROWSER } from "$fresh/runtime.ts";

const module = IS_BROWSER
  ? await import("@emotion/use-insertion-effect-with-fallbacks.browser")
  : await import("@emotion/use-insertion-effect-with-fallbacks.worker");

export const {
  useInsertionEffectAlwaysWithSyncFallback,
  useInsertionEffectWithLayoutFallback,
} = module;
