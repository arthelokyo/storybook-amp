import { addons } from "storybook/manager-api";
import { create } from "storybook/theming/create";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Storybook AMP",
    brandUrl: "https://github.com/arthelokyo/storybook-amp",
  }),
});
