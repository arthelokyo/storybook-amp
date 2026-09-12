import React from "react";

const Component = () => (
  <amp-accordion animate="">
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

export default {
  title: "Libraries/No Valid AMP",
  parameters: {
  },
};

export const Base = () => <Component />;

Base.storyName = "No Valid AMP";
