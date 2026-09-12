import React from "react";

export default {
  title: "Components/Websites/amp-date-picker",
  parameters: {
    amp: {
      scripts: `
        <script async custom-element="amp-date-picker" src="https://cdn.ampproject.org/v0/amp-date-picker-0.1.js"></script>
      `,
    },
  },
};

export const Base = () => (
  <amp-date-picker
    id="static-picker"
    type="single"
    mode="static"
    layout="fixed-height"
    height="360"
    format="YYYY-MM-DD"
  ></amp-date-picker>
);

Base.storyName = "amp-date-picker";
