import { IS_BROWSER } from "$fresh/runtime.ts";

const module = IS_BROWSER
  ? await import("@emotion/styled.browser")
  : await import("@emotion/styled.worker");

export default module.default;
