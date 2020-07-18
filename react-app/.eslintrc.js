/**
 * To install required packages run:
 *
 * npm i -D \
    eslint-plugin-jsx-a11y \
    eslint-plugin-react \
    eslint-plugin-react-hooks \
    eslint-config-react-app
 */

module.exports = {
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'jsx-a11y', 'prettier'],
  extends: [
    'react-app',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    '../.eslintrc.ts',
  ],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-dom',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: { order: 'asc' },
      },
    ],

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'component'],
      },
    ],

    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/state-in-constructor': ['error', 'never'],
  },
};
