/**
 * To install required packages run:
 *
 * npm i -D \
    eslint \
    eslint-config-airbnb-base \
    eslint-config-prettier \
    eslint-plugin-import \
    eslint-plugin-prettier \
    prettier
 */

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'never', { svg: 'always' }],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true, // The true value here is for backward compatibility
        allowLiteral: false,
        allowObject: false,
      },
    ],

    'spaced-comment': ['error', 'always', { markers: ['/'] }],

    'no-underscore-dangle': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            message:
              'Please use direct imports to improve development start times',
          },
          {
            name: '@material-ui/styles',
            message: 'Please use @material-ui/core',
          },
          {
            name: 'mdi-material-ui',
            message:
              'Please use default exports to improve development start times',
          },
        ],
      },
    ],
  },
};
