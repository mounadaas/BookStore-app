/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'maxBlueGreen': 'hsl(184, 50%, 60%)',
        'selectiveYellow': 'hsl(42, 98%, 55%)',
        'eerieBlack70': 'hsla(240, 1%, 14%, 0.7)',
        'grantieGray': 'hsl(0, 0%, 40%)',
        'spanishGray': 'hsl(0, 0%, 57%)',
        'oxfordBlue': 'hsl(243, 95%, 8%)',
        'eerieBlack': 'hsl(214, 10%, 14%)',
        'xiketic': 'hsl(240, 100%, 6%)',
        'white1': 'hsl(0, 0%, 100%)',
        'white2': 'hsl(0, 0%, 98%)',
        'white10': 'hsla(0, 0%, 100%, 0.1)',
        'jet': 'hsl(225, 4%, 21%)',
      },
      width:{
        '48%':'48%',
        '32%':'32%',
        '23%':'23%',
        '24%':'24%',

        '42%': '42%',
        '26%' : '26%',
        '10%' : '10%',

      },
      backgroundImage: {
        'hero-pattern': "url('/src/images/hero-bg.jpg')",
        'banner': "url('/src/images/section-bg.jpg')",
      },
      maxWidth:{
        '18' : '18rem',
      }
      
    },
  },
  plugins: [],
}

