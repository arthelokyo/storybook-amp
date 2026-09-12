import { defineConfig } from "tsup";

import packageJson from "./package.json" with { type: "json" };

const {
  bundler: { managerEntries = [], previewEntries = [] },
} = packageJson;

// Packages Storybook provides at runtime. They must never be bundled and must
// not become dependencies of the addon either.
const storybookProvided = [/^storybook\//, "@storybook/icons", "react", "react-dom"];

const commonConfig = {
  format: ["esm"],
  platform: "browser",
  // Storybook bundles the addon entries again, so modern output is fine.
  target: "esnext",
  treeshake: true,
  splitting: false,
  clean: false,
  sourcemap: false,
};

export default defineConfig([
  {
    ...commonConfig,
    entry: managerEntries,
    external: storybookProvided,
  },
  {
    ...commonConfig,
    entry: previewEntries,
    external: [...storybookProvided, "react-dom/server", "styled-components", /^@emotion\//],
  },
]);
