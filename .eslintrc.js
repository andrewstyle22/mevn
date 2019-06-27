module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
    'no-use-before-define': 'off',
    'no-restricted-globals': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
          'acc',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'Vue',
        ],
      },
    ],
    'no-shadow': ['error', { allow: ['state'] }],
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'import/extensions': [
      2,
      {
        ts: 'never',
        js: 'never',
        vue: 'always',
        json: 'always',
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
      },
    ],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'object-property-newline': 'error',
    'linebreak-style': [2, 'windows'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
