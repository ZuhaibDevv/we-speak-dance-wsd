/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  compilerOptions: {
    outDir: './dist/',
    noImplicitAny: true,
    module: 'es6',
    target: 'es5',
    jsx: 'react',
    allowJs: true,
    moduleResolution: 'node',
  },
};
