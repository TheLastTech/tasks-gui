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
    'no-trailing-spaces': 0,
    'keyword-spacing': 0,
    'space-before-blocks': 0,
    'no-plusplus': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 0,
    'eslint-disable indent': 0,
    'global-require': 'off',
    'no-new': 0, // Intrusive when using Chart.js instances.
    'no-underscore-dangle': 0, // Chart.js uses underscore dangles (_) internally.
    'import/no-unresolved': 0, // False positives regarding imports that use aliases.
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'max-len': 'off',
      },
    },
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
};
