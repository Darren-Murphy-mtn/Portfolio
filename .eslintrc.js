module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:tailwindcss/recommended', 'prettier'],
  plugins: ['tailwindcss'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
};