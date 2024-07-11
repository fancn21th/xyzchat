import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

// toggle theme by @ https://storybook.js.org/recipes/tailwindcss
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
  ],
};

export default preview;
