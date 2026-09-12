export const ADDON_ID = "storybook-amp";

export const PANEL_ID = `${ADDON_ID}/panel`;
export const PANEL_TITLE = "AMP";
export const TOOL_ID = `${ADDON_ID}/tool`;
export const PARAM_KEY = "amp";

export const EVENTS = {
  RESULT: `${ADDON_ID}/result`,
};

export const DEFAULT_STATE = {
  storyId: null,
  isValid: undefined,
  type: "amphtml",
  html: null,
};
