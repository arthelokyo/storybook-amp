import React from "react";
import ReactDOMServer from "react-dom/server";

import { addons, useEffect } from "storybook/preview-api";

import { getTemplateFn } from "./templates";
import getBlobURL from "./utils/getBlobURL";

import { EVENTS } from "./constants";

const defaultRenderFn = (storyFn, context) => ({
  html: ReactDOMServer.renderToStaticMarkup(storyFn(context)),
  styles: null,
});

const getAmpHTML = (
  storyFn,
  { title, scripts, styles: customStyles, baseUrl, renderFn, context },
  templateFn
) => {
  const { html, styles } = renderFn(storyFn, context);

  const innerProps = {
    title,
    scripts: typeof scripts === "string" ? scripts : "",
    styles: `${typeof customStyles === "string" ? customStyles : ""}${styles || ""}`,
    baseUrl,
  };

  return templateFn(innerProps).replace("<!-- STORY CODE -->", html);
};

export const withAmp = (storyFn, context = {}) => {
  const {
    isEnabled = false,
    template = "amphtml",
    scripts = "",
    styles = "",
    renderFn = defaultRenderFn,
  } = context.parameters?.amp ?? {};

  let amp = null;

  if (isEnabled) {
    const { type, templateFn } = getTemplateFn(template);
    const html = getAmpHTML(
      storyFn,
      {
        title: context.title,
        scripts,
        styles,
        renderFn,
        context,
        baseUrl: window.location.origin,
      },
      templateFn
    );

    amp = { type, html, blobURL: getBlobURL(html, "text/html") };
  }

  // Hooks must run on every render, enabled or not, to keep their order stable.
  useEffect(() => {
    if (!amp) {
      return undefined;
    }

    // Docs pages render every story at once, which would make each of them
    // overwrite the addon state, so only report the story being viewed.
    if (context.viewMode === "story") {
      addons.getChannel().emit(EVENTS.RESULT, {
        storyId: context.id,
        html: amp.html,
        type: amp.type,
      });
    }

    return () => URL.revokeObjectURL(amp.blobURL);
  }, [amp?.blobURL]);

  if (!amp) {
    return storyFn(context);
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "body { position: absolute; top: 0; left: 0; width: 100%; height: 100%; padding: 0; margin: 0; }",
        }}
      />
      <iframe
        id="amp-iframe"
        src={amp.blobURL}
        title={context.title || "AMP"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
        }}
      />
    </>
  );
};

export default withAmp;
