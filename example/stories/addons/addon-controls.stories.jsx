import React from "react";

export default {
  title: "Addons/Controls",
  parameters: {
    controls: {
      disable: false,
    },
    amp: {
      scripts: `
        <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>
      `,
    },
  },
  argTypes: {
    videoId: {
      control: "select",
      options: ["lBTCB7yLs8Y", "9Cfxm7cikMY", "f02mOEt11OQ"],
    },
  },
};

export const Base = ({ videoId, ...args }) => (
  <amp-youtube
    width="480"
    height="270"
    layout="responsive"
    data-videoid={videoId}
  ></amp-youtube>
);

Base.storyName = "Controls";
Base.args = {
  videoId: "lBTCB7yLs8Y",
};
