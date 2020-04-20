module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'prettier/react',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:jsx-a11y/strict',
    'plugin:jest/recommended',
  ],
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  plugins: ['react-hooks', 'react-native', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-fragments': [1, 'syntax'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      versions: 'detect',
    },
  },
};
