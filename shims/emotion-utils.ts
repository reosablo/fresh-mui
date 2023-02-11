import { IS_BROWSER } from "$fresh/runtime.ts";

const module = IS_BROWSER
  ? await import("@emotion/utils.browser")
  : await import("@emotion/utils.worker");

export const {
  getRegisteredStyles,
  insertStyles,
  registerStyles,
} = module;
