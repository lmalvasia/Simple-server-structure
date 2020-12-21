module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'no-await-in-loop': 'off',
  },
};
