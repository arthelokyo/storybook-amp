import { renderToStaticMarkup } from "react-dom/server";

import { ServerStyleSheet } from "styled-components";

export default (storyFn, context) => {
  let html = "";
  let styles;

  const sheet = new ServerStyleSheet();

  try {
    html = renderToStaticMarkup(sheet.collectStyles(storyFn(context)));
    const styleTags = sheet.getStyleTags();
    styles = styleTags.replace(/<style[^>]*>/, "").replace("</style>", "");
  } catch (error) {
    console.error(error);
  } finally {
    sheet.seal();
  }

  return {
    html,
    styles,
  };
};
