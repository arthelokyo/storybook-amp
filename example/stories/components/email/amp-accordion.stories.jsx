import React from "react";

export default {
  title: "Components/Email/amp-accordion",
  parameters: {
    amp: {
      template: "amp4email",
      scripts: `
        <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
      `,
    },
  },
};

export const Base = () => (
  <amp-accordion>
    <section expanded="">
      <h4>Section 1</h4>
      <p>Bunch of awesome content.</p>
    </section>
    <section>
      <h4>Section 2</h4>
      <div>
        Bunch of even more awesome content. This time in a{" "}
        <code>&lt;div&gt;</code>.
      </div>
    </section>
    <section>
      <h4>Section 3</h4>
      <p>Bunch of awesome content.</p>
    </section>
  </amp-accordion>
);

Base.storyName = "amp-accordion";
