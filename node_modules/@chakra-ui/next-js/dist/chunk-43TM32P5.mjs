// src/use-emotion-cache.ts
import emotion_createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation.js";
import { createElement, useMemo } from "react";
var _a;
var createCache = (_a = emotion_createCache.default) != null ? _a : emotion_createCache;
function useEmotionCache(options) {
  const cache = useMemo(() => {
    const cache2 = createCache({ key: "css", prepend: true, ...options });
    cache2.compat = true;
    return cache2;
  }, [options]);
  useServerInsertedHTML(
    () => createElement("style", {
      key: cache.key,
      "data-emotion": `${cache.key} ${Object.keys(cache.inserted).join(" ")}`,
      dangerouslySetInnerHTML: {
        __html: Object.values(cache.inserted).join(" ")
      }
    })
  );
  return cache;
}

export {
  useEmotionCache
};
