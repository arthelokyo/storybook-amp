const VALIDATOR_SCRIPT_ID = "storybook-amp-validator-script";
const VALIDATOR_SCRIPT_SRC = "https://cdn.ampproject.org/v0/validator_wasm.js";

let loading;

/**
 * Loads the official AMP validator into the manager window, once.
 * Validation runs in the manager because channel messages cannot carry
 * functions: telejson drops them while serializing.
 */
const load = () => {
  if (window.amp?.validator?.validateString) {
    return Promise.resolve(window.amp.validator);
  }

  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const head = document.head || document.getElementsByTagName("head")[0];
      const script = document.createElement("script");

      script.addEventListener("load", () => {
        if (!window.amp?.validator?.init) {
          reject(new Error("The AMP validator could not be initialized."));
          return;
        }
        window.amp.validator.init().then(() => resolve(window.amp.validator), reject);
      });
      script.addEventListener("error", () =>
        reject(new Error(`The AMP validator could not be loaded from ${VALIDATOR_SCRIPT_SRC}`))
      );

      script.src = VALIDATOR_SCRIPT_SRC;
      script.id = VALIDATOR_SCRIPT_ID;
      script.async = false;

      head.insertBefore(script, head.firstChild);
    }).catch((error) => {
      loading = undefined;
      throw error;
    });
  }

  return loading;
};

export const validate = async (html, htmlFormat) => {
  const validator = await load();
  const result = htmlFormat
    ? validator.validateString(html, htmlFormat)
    : validator.validateString(html);

  return result?.status === "PASS";
};
