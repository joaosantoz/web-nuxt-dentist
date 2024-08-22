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
      backgroundImage: {
        "white-shadow": `
          linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, 
            rgba(255, 255, 255, .4) 33%, 
            rgba(255, 255, 255, 0.5) 66%, 
            rgba(255, 255, 255, 1) 100%)
        ` 
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
        media: '254px',
        mobile: '360px',
        gallery: '778px',
        text: '980px',        
        desktop: '1180px',
      }
    },
  },
};
