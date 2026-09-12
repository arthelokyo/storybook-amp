import React from "react";
import { useAddonState } from "storybook/manager-api";
import { AddonPanel } from "storybook/internal/components";

import { ADDON_ID, DEFAULT_STATE } from "./constants";
import { PanelContent } from "./components/PanelContent";

export const Panel = ({ active }) => {
  const [state] = useAddonState(ADDON_ID, DEFAULT_STATE);

  return (
    <AddonPanel active={Boolean(active)}>
      <PanelContent data={state} />
    </AddonPanel>
  );
};
