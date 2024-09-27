/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        '4rem': '4rem'
      },
      maxWidth: {
        content: '1152px',
        layout: '1280px',
        text: '800px'
      },
      spacing: {
        s0: '0px',
        s1: '4px',
        s2: '8px',
        s3: '12px',
        s4: '16px',
        s5: '20px',
        s6: '24px',
        s7: '32px',
        s8: '40px',
        s9: '48px',
        s10: '64px',
        s11: '80px',
        s12: '96px',
        s13: '120px',
        s14: '160px'
      },
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xLg: '1160px',
        xl: '1280px',
        '2xl': '1536px',
        'max-md': { max: '768px' }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: '#195c5d',
        secondary: '#195c5c',
        ternary: 'rgb(230, 235, 240)',
        customBlue: 'rgb(245 250 253)',
        customLightBlue: '#e7f4f4',
        customBrandDark: '#286e6f',
        customBrandLight: '#338081',
        customRed: 'hsl(0, 80%, 70%)',
        customGray: 'rgb(162, 163, 170)',
        slateGray: 'rgb(128, 128, 128)',
        label: 'rgb(77, 77, 77)',
        blackBorder: 'rgb(179, 179, 179)',
        'secondary-grey': 'rgb(242 242 242)',
        'kardia-blue': 'rgb(22, 79, 140)',
        'home-hero-banner': '#303741',
        'primary-50': '#e7f4f4',
        'primary-75': '#d3e8e9',
        'primary-100': '#bfdbdd',
        'primary-200': '#99c2c6',
        'primary-300': '#7cabaf',
        'primary-400': '#5a9496',
        'primary-500': '#338081',
        'primary-600': '#286e6f',
        'primary-700': '#195c5d',
        'primary-800': '#074a4b',
        'primary-900': '#1c4242',
        'btn-bg': '#338081',
        'btn-text': '#fff',
        'btn-hover': '#1c4242',
        'black-800': 'rgb(51, 51, 51)',
        'corporate-50': '#F1F5F3'
      },
      height: {
        customHeight30: '10rem'
      },
      width: {
        customW100: '300px'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
