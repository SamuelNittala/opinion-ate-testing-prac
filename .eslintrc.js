module.exports = {
  extends: ['react-app', 'prettier'],
  plugins: ['prettier', 'jest', 'cypress'],
  env: {
    browser: true,
    'cypress/globals': true,
    es6: true,
    'jest/globals': true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'off',
  },
};
