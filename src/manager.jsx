import React from "react";
import { addons, types } from "storybook/manager-api";
import { STORY_CHANGED } from "storybook/internal/core-events";

import { ADDON_ID, DEFAULT_STATE, EVENTS, PANEL_ID, PANEL_TITLE, TOOL_ID } from "./constants";

import { Tool } from "./Tool";
import { Panel } from "./Panel";

addons.register(ADDON_ID, (api) => {
  // Subscribing here rather than in the components keeps a single listener
  // alive even when the tool or the panel are not mounted.
  api.on(EVENTS.RESULT, (result) =>
    api.setAddonState(ADDON_ID, { ...DEFAULT_STATE, ...result })
  );
  api.on(STORY_CHANGED, () => api.setAddonState(ADDON_ID, DEFAULT_STATE));

  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "AMP",
    match: ({ viewMode }) => viewMode === "story",
    render: () => <Tool />,
  });

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: PANEL_TITLE,
    match: ({ viewMode }) => viewMode === "story",
    render: ({ active }) => <Panel active={active} />,
  });
});
