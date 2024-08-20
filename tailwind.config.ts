import type { Config } from 'tailwindcss';

export default <Partial<Config>> {
  content: ["./*/**/*.vue"],
  theme: {
    extend: {
      colors: {
        "primary": "#00BBB9",
        "dark-blue": "#263238",
        "light-grey": "#ECEFF1"
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        base: ['14px', '24px'],
        md: ['16px', '20px'],
        lg: ['22px', '24px'],
        xl: ['24px', '28px']
      },
      screens: {
        "mobile-sm": '360px'
      }
    },
  },
};
