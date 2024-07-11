import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
// import { withThemeByDataAttribute } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    // withThemeByDataAttribute({
    //   defaultTheme: "light",
    //   themes: {
    //     light: "light",
    //     dark: "dark",
    //   },
    //   attributeName: "data-mode",
    // }),
  ],
};

export default preview;
