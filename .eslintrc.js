process.env.NODE_ENV = process.env.NODE_ENV || 'development';
module.exports = {
  root: true,
  extends: '@nuofe/eslint-config-react',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  globals: {},
  settings: {
    'import/resolver': {
      node: {},
      webpack: {
        config: require('@nuofe/ndk-builder').default.getResolveConfig(),
      },
    },
  },
};
