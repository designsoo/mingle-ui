import type { Preview } from '@storybook/react';
import '@fontsource/plus-jakarta-sans/400.css';
import '@fontsource/plus-jakarta-sans/600.css';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0A0A0A',
        },
      ],
    },
  },
};

export default preview;
