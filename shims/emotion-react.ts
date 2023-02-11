import { IS_BROWSER } from "$fresh/runtime.ts";

const module = IS_BROWSER
  ? await import("@emotion/react.browser")
  : await import("@emotion/react.worker");

export const {
  CacheProvider,
  ClassNames,
  Global,
  ThemeContext,
  ThemeProvider,
  __unsafe_useEmotionCache,
  jsx: createElement,
  css,
  jsx,
  keyframes,
  useTheme,
  withEmotionCache,
  withTheme,
} = module;
