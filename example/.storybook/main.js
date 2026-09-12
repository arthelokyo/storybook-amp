/** @type {import('@storybook/react-webpack5').StorybookConfig} */
const config = {
  stories: [
    "../stories/docs/*.mdx",
    "../stories/components/websites/*.stories.@(js|jsx)",
    "../stories/components/email/*.stories.@(js|jsx)",
    "../stories/components/ads/*.stories.@(js|jsx)",
    "../stories/libraries/*.stories.@(js|jsx)",
    "../stories/addons/*.stories.@(js|jsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs",
    "@storybook/addon-links",

    "storybook-amp",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      // The addon is linked with `file:..`, so keep the symlinked path and let
      // React, styled-components and Emotion resolve to this example's single
      // copy, exactly like a published install would.
      symlinks: false,
    },
  }),
};

export default config;
