import React from "react";
import { renderToString } from "react-dom/server";

import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";

export default (storyFn, context) => {
  const cache = createCache({ key: "amp" });
  const { extractCritical } = createEmotionServer(cache);

  const element = <CacheProvider value={cache}>{storyFn(context)}</CacheProvider>;

  const { html, css: styles } = extractCritical(renderToString(element));

  return { html, styles };
};
