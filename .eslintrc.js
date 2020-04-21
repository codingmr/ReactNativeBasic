module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:import/warnings',
  ],
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      versions: 'detect',
    },
  },
};
