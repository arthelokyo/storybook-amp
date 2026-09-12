import React from "react";

const Component = () => (
  <div>
    No Storybook AMP
  </div>
);

export default {
  title: "Libraries/No Storybook AMP",
  parameters: {
    amp: {
      isEnabled: false,
      disable: true,
    },
  },
};

export const Base = () => <Component />;

Base.storyName = "No Storybook AMP";
