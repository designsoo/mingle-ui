/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jakarta: 'Plus Jakarta Sans',
      },
      fontSize: {
        'base-12': [
          '0.75rem', // 12px
          {
            lineHeight: '1.125rem', // 18px
            fontWeight: 400,
          },
        ],
        'base-13': [
          '0.8125rem', // 13px
          {
            lineHeight: '1.125rem', // 18px
            fontWeight: 400,
          },
        ],
        'bold-13': [
          '0.8125rem', // 13px
          {
            lineHeight: '1.125rem', // 18px
            fontWeight: 600,
          },
        ],
        'base-14': [
          '0.875rem', // 14px
          {
            lineHeight: '1.25rem', // 20px
            fontWeight: 400,
          },
        ],
        'bold-14': [
          '0.875rem', // 14px
          {
            lineHeight: '1.25rem', // 20px
            fontWeight: 600,
          },
        ],
        'base-16': [
          '1rem', // 16px
          {
            lineHeight: '1.5rem', // 24px
            fontWeight: 400,
          },
        ],
        'bold-16': [
          '1rem', // 16px
          {
            lineHeight: '1.5rem', // 24px
            fontWeight: 600,
          },
        ],
        'base-18': [
          '1.125rem', // 18px
          {
            lineHeight: '1.75rem', // 28px
            fontWeight: 400,
          },
        ],
        'bold-18': [
          '1.125rem', // 18px
          {
            lineHeight: '1.75rem', // 28px
            fontWeight: 600,
          },
        ],
        'base-20': [
          '1.25rem', // 20px
          {
            lineHeight: '1.75rem', // 28px
            fontWeight: 400,
          },
        ],
        'bold-20': [
          '1.25rem', // 20px
          {
            lineHeight: '1.75rem', // 28px
            fontWeight: 600,
          },
        ],
        'base-24': [
          '1.5rem', // 24px
          {
            lineHeight: '2.125rem', // 34px
            fontWeight: 400,
          },
        ],
        'bold-24': [
          '1.5rem', // 24px
          {
            lineHeight: '2.125rem', // 34px
            fontWeight: 600,
          },
        ],
        'base-32': [
          '2rem', // 32px
          {
            lineHeight: '2.625rem', // 42px
            fontWeight: 400,
          },
        ],
        'bold-32': [
          '2rem', // 32px
          {
            lineHeight: '2.625rem', // 42px
            fontWeight: 600,
          },
        ],
      },
      keyframes: {
        fadeUp: {
          from: { transform: 'translateY(1.25rem)', opacity: 0 }, // 20px
          to: { transform: 'translateY(0)', opacity: 1 },
        },
        fadeDown: {
          from: { transform: 'translateY(0)', opacity: 0 },
          to: { transform: 'translateY(2.5rem)', opacity: 1 }, // 40px
        },
      },
      animation: {
        'fade-up': 'fadeUp ease-in-out .3s',
        'fade-down': 'fadeDown ease-in-out .3s',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.flexbox-column': {
          '@apply flex flex-col items-center justify-center': '',
        },
        '.flexbox-row': {
          '@apply flex flex-row items-center justify-center': '',
        },
        '.color-text-primary': {
          '@apply text-neutral-200': '',
        },
        '.color-text-inverse': {
          '@apply text-neutral-950': '',
        },
        '.color-border-category': {
          '@apply border-neutral-500': '',
        },
        '.color-background-opacity-white-5': {
          '@apply bg-white bg-opacity-5': '',
        },
        '.color-background-opacity-white-10': {
          '@apply bg-white bg-opacity-10': '',
        },
        '.color-background-opacity-black-70': {
          '@apply bg-black bg-opacity-70': '',
        },
        '.color-background-opacity-black-30': {
          '@apply bg-black bg-opacity-30': '',
        },
        '.color-background-opacity-yellow-20': {
          '@apply bg-yellow-300 bg-opacity-20': '',
        },
        '.color-border-button': {
          '@apply border-neutral-700': '',
        },
        '.color-border-button-hover': {
          '@apply border-neutral-200': '',
        },
        '.color-border-button-focus': {
          '@apply border-yellow-300': '',
        },
      });
    },
  ],
};
