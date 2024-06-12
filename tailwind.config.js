/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary-300': '#F5E724',
        'primary-400': '#DDD020',
      },
      fontFamily: {
        jakarta: 'Plus Jakarta Sans',
      },
      fontSize: {
        'base-12': [
          '1.2rem',
          {
            lineHeight: '1.8rem',
            fontWeight: 400,
          },
        ],
        'base-13': [
          '1.3rem',
          {
            lineHeight: '1.8rem',
            fontWeight: 400,
          },
        ],
        'bold-13': [
          '1.3rem',
          {
            lineHeight: '1.8rem',
            fontWeight: 600,
          },
        ],
        'base-14': [
          '1.4rem',
          {
            lineHeight: '2rem',
            fontWeight: 400,
          },
        ],
        'bold-14': [
          '1.4rem',
          {
            lineHeight: '2rem',
            fontWeight: 600,
          },
        ],
        'base-16': [
          '1.6rem',
          {
            lineHeight: '2.4rem',
            fontWeight: 400,
          },
        ],
        'bold-16': [
          '1.6rem',
          {
            lineHeight: '2.4rem',
            fontWeight: 600,
          },
        ],
        'base-18': [
          '1.8rem',
          {
            lineHeight: '2.8rem',
            fontWeight: 400,
          },
        ],
        'bold-18': [
          '1.8rem',
          {
            lineHeight: '2.8rem',
            fontWeight: 600,
          },
        ],
        'base-20': [
          '2rem',
          {
            lineHeight: '2.8rem',
            fontWeight: 400,
          },
        ],
        'bold-20': [
          '2rem',
          {
            lineHeight: '2.8rem',
            fontWeight: 600,
          },
        ],
        'base-24': [
          '2.4rem',
          {
            lineHeight: '3.4rem',
            fontWeight: 400,
          },
        ],
        'bold-24': [
          '2.4rem',
          {
            lineHeight: '3.4rem',
            fontWeight: 600,
          },
        ],
        'base-32': [
          '3.2rem',
          {
            lineHeight: '4.2rem',
            fontWeight: 400,
          },
        ],
        'bold-32': [
          '3.2rem',
          {
            lineHeight: '4.2rem',
            fontWeight: 600,
          },
        ],
      },
      keyframes: {
        fadeUp: {
          from: { transform: 'translateY(2rem)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
        fadeDown: {
          from: { transform: 'translateY(0)', opacity: 0 },
          to: { transform: 'translateY(4rem)', opacity: 1 },
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
      });
    },
  ],
};
