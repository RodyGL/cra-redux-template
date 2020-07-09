/**
 * To install required packages run:
 *
 * npm i -D \
    @typescript-eslint/eslint-plugin \
    @typescript-eslint/parser \
    eslint \
    eslint-config-airbnb-typescript \
    eslint-config-prettier \
    eslint-plugin-flowtype \
    eslint-plugin-import \
    eslint-plugin-prettier \
    prettier \
    typescript
 */

module.exports = {
  extends: ['./.eslintrc.base'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        caughtErrors: 'all',
      },
    ],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      { path: 'always', types: 'always', lib: 'always' },
    ],
  },
};
