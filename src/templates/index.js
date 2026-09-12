import defaultAMPHtmlTemplate from "./defaultAMPHtmlTemplate";
import defaultAMP4EmailTemplate from "./defaultAMP4EmailTemplate";
import defaultAMP4AdsTemplate from "./defaultAMP4AdsTemplate";

export {
  defaultAMPHtmlTemplate,
  defaultAMP4EmailTemplate,
  defaultAMP4AdsTemplate,
};

export const getTemplateFn = (template) => {
  // A custom template function renders plain AMP Html.
  if (typeof template === "function") {
    return {
      type: "amphtml",
      templateFn: template,
    };
  }

  switch (template) {
    case "amp4email":
      return {
        type: "amp4email",
        templateFn: defaultAMP4EmailTemplate,
      };

    case "amp4ads":
      return {
        type: "amp4ads",
        templateFn: defaultAMP4AdsTemplate
      }

    case "amphtml":
    default:
      return {
        type: "amphtml",
        templateFn: defaultAMPHtmlTemplate
      }
  }
};
