module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript/base',
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react'],
  rules: {
    'react/function-component-definition': 0,
    'import/prefer-default-export': 0,
    'eslint-disable-next-line': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'import/extensions': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/restrict-template-expressions': 0,
  },
}
