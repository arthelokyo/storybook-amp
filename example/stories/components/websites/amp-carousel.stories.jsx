import React from "react";

export default {
  title: "Components/Websites/amp-carousel",
  parameters: {
    amp: {
      scripts: `
        <script async custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js"></script>
      `,
    },
  },
};

export const Base = () => (
  <amp-carousel height="300" layout="fixed-height" type="slides">
    <div>
      <div style={{ backgroundColor: "blue", height: 300 }}>
        This is a blue box.
      </div>
    </div>
    <div>
      <div style={{ backgroundColor: "red", height: 300 }}>
        This is a red box.
      </div>
    </div>
    <div>
      <div style={{ backgroundColor: "green", height: 300 }}>
        This is a green box.
      </div>
    </div>
  </amp-carousel>
);

Base.storyName = "amp-carousel";
