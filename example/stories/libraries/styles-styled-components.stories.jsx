import React from "react";
import styled from "styled-components"
import renderFn from "storybook-amp/render-fn/styled-components"

const Component = ({ className }) => (
  <amp-accordion class={className} animate="">
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
)

const StyledComponent = styled(Component)`
  & section {
    margin-bottom: 5px;
  }

  & section > :first-child {
    padding: 10px;
    border: none;
    transition: background-color 0.2s, color 0.2s;
  }

  & section > :last-child {
    background: #fafafa;
    padding: 10px;
  }

  & section[expanded] > :first-child,
  & section > :first-child:hover {
    background: #005af0;
    color: #fff;
  }
`

export default {
  title: "Libraries/Styled Components",
  parameters: {
    amp: {
      scripts: `
        <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
      `,
      renderFn
    },
  },
};

export const Base = () => (
  <StyledComponent />
);

Base.storyName = "Styled Components";