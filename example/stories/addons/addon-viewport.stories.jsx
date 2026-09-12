import React from 'react';

export default {
  title: 'Addons/Viewport',
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
    amp: {
      scripts: `
        <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>
      `,
    },
  }
};

export const Base = (args) => (
  <amp-youtube
    width="480"
    height="270"
    layout="responsive"
    data-videoid='lBTCB7yLs8Y'
  ></amp-youtube>
);

Base.storyName = 'Viewport';