/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'food': "url('/food-bg.svg')"
      },
    },
    fontFamily:{
      'sans': ['Helvetica', ...defaultTheme.fontFamily.sans],
      'serif': [...defaultTheme.fontFamily.serif],
      'mono': [...defaultTheme.fontFamily.mono],
      'century-ghotic':['Century Gothic', 'sans-serif']
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'diabeats': {
           'primary' : '#3A5A4F',
           'primary-focus' : '#B6D4BD',
           'primary-content' : '#ffffff',

           'secondary' : '#DFA1D1',
           'secondary-focus' : '#e2b6d8',
           'secondary-content' : '#ffffff',

           'accent' : '#FAA23E',
           'accent-focus' : '#ffc17a',
           'accent-content' : '#ffffff',

           'neutral' : '#2a342a',
           'neutral-focus' : '#576657',
           'neutral-content' : '#ffffff',

           'base-100' : '#FBFBFB',
           'base-200' : '#ededed',
           'base-300' : '#d6d6d6',
           'base-content' : '#2A342B',

           'info' : '#66c7ff',
           'success' : '#87cf3a',
           'warning' : '#e1d460',
           'error' : '#ff6b6b',

          '--rounded-box': '1rem',          
          '--rounded-btn': '.5rem',        
          '--rounded-badge': '1.9rem',      

          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       

          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '1px',            
        },
      },
    ],
  },
}
