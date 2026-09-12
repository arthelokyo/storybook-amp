# Storybook AMP Html &middot; [![npm package](https://img.shields.io/npm/v/storybook-amp?color=green&label=npm&style=flat-square)](https://www.npmjs.com/package/storybook-amp)

Storybook addon for [AMP (Accelerated Mobile Pages)](https://amp.dev/). Allows to display in your stories *AMP Html* components generated with React.

![Screenshot](screenshot.png)

<details open="open">
<summary>Table of Contents</summary>

- [Features](#features)
- [Demo](#demo)
- [Compatibility](#compatibility)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [CSS-in-JS libraries](#css-in-js-libraries)
  - [CSF Factories](#csf-factories)
  - [Examples](#examples)
- [Migrating from 3.x](#migrating-from-3x)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Links](#links)

</details>

<br />

## Features

- Deliver in each story the output code (AMP ready) resulting from the SSR.
- Works with [AMP websites](https://amp.dev/about/websites/), [AMP email](https://amp.dev/about/email/) and [AMP ads](https://amp.dev/about/ads/)
- Realtime AMP validation.
- Adds addon panel to also validate the story (using online [AMP Validator](https://validator.ampproject.org/)) and view the output code.
- Supports Styled Components and Emotion through custom render functions.

<br />

## Demo

- [Storybook AMP Html Demo](https://storybook-amp.netlify.app/)

<br />

## Compatibility

| Addon version | Storybook | Node |
| --- | --- | --- |
| `4.x` | 10 and 11 | 20.19+ (22.12+ for Storybook 11) |
| `3.x` | 7 and 8 | 14+ |

The addon requires a React renderer. Both the webpack (`@storybook/react-webpack5`) and Vite (`@storybook/react-vite`) builders work.

<br />

## Getting Started

### Installation

```sh
npm install -D storybook-amp
```


### Configuration

Next, update `.storybook/main.js` to the following:

```js
// .storybook/main.js

export default {
  stories: [
    // ...
  ],
  addons: [
    // Other Storybook addons

    "storybook-amp", // 👈 The addon registered here
  ],
};
```


### Usage

To set custom settings, use the `amp` parameter.

```js
// .storybook/preview.js

const scripts = "";
const styles = "";

export default {
  parameters: {
    // Other defined parameters

    amp: {              // 👈 The addon parameters here
      isEnabled: true,  // Enable the addon, false by default (boolean)
      scripts,          // Global scripts to add, empty by default (string)
      styles,           // Custom css styles, empty by default (string)
      template: "amphtml", // "amphtml", "amp4email" or "amp4ads"
    },
  },
};
```

You can use the `amp` parameter to override settings on each story individually:

```jsx
// Story example

export default {
  title: "Components/amp-youtube",
  parameters: {
    amp: {
      scripts: // 👈 Script needed by the story
        `<script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script>`,
    },
  },
};

export const Story = () => (
  <amp-youtube
    width="480"
    height="270"
    layout="responsive"
    data-videoid="lBTCB7yLs8Y"
  ></amp-youtube>
);
```

### CSS-in-JS libraries

Stories using Styled Components or Emotion need a render function so their styles end up inside `<style amp-custom>`:

```jsx
import renderFn from "storybook-amp/render-fn/styled-components";
// or: import renderFn from "storybook-amp/render-fn/emotion-js";

export default {
  title: "Libraries/Styled Components",
  parameters: {
    amp: { renderFn },
  },
};
```

### CSF Factories

On Storybook 10 and 11 the addon can also be registered through a CSF factory, which types the `amp` parameter for you:

```ts
// .storybook/preview.ts

import { definePreview } from "@storybook/react-webpack5";
import amp from "storybook-amp";

export default definePreview({
  addons: [amp()],
});
```

### Examples

- [React](https://github.com/arthelokyo/storybook-amp/tree/main/example)

<br />

## Migrating from 3.x

`4.0.0` targets Storybook 10 and 11. No story or parameter change is required, but note:

- AMP validation now runs in the Storybook manager instead of the preview. Storybook can no longer send functions over its channel, which is why the validity badge stopped working on Storybook 8 and later.
- Opening a story canvas standalone (`iframe.html?id=…`, "open in new tab", the test runner, Chromatic) no longer navigates the page to the generated AMP document. The story is always rendered inside the AMP iframe, so the Storybook runtime stays alive.
- The addon is now ESM only and exposes its render functions through package exports: import `storybook-amp/render-fn/styled-components` instead of a deep relative path.
- `styled-components` and `@emotion/*` are optional peer dependencies; install them only if you use the matching render function.

<br />

## Roadmap

- Make it compatible with the *Chromatic addon*
- Make it compatible with the *Accessibility addon*
- Adjust UI details when used with *Docs addon*
- More tools for *AMP Ads* and *AMP Email*
- Add more example tests
- Add tests

<br />

## Contributing

Storybook AMP Html addon is an open-source project. We are committed to a fully transparent development process and appreciate highly any contributions. Whether you are helping us fix bugs, proposing new features, improving our documentation or spreading the word - we would love to have you as part of the community.

Please refer to our [Contribution Guidelines](https://github.com/arthelokyo/storybook-amp/blob/main/CONTRIBUTING.md).

## License

The Storybook AMP Html addon is licensed under the MIT license — see the [LICENSE](https://github.com/arthelokyo/storybook-amp/blob/main/LICENSE) file for details.

## Acknowledgements

Initially created by [Arthelokyo](https://github.com/arthelokyo) and maintained by a community of [contributors](https://github.com/arthelokyo/storybook-amp/graphs/contributors).

## Links

- [AMP Project](https://amp.dev/)
- [Awesome Amp](https://github.com/arthelokyo/awesome-amp)
