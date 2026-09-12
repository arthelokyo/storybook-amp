/** @type {import('@storybook/react-webpack5').Preview} */
const preview = {
  parameters: {
    amp: {
      isEnabled: true,
      styles: "", // Custom AMP styles
    },

    controls: {
      disable: true,
    },
  },

  initialGlobals: {
    viewport: { value: "mobile1", isRotated: false },
  },
};

export default preview;
