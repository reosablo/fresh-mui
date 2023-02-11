import { IS_BROWSER } from "$fresh/runtime.ts";

const module = IS_BROWSER
  ? await import("@emotion/cache.browser")
  : await import("@emotion/cache.worker");

export default module.default;
