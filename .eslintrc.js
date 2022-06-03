module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'airbnb',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // radix: 0,
    // 'no-restricted-syntax': 0,
    // 'no-await-in-loop': 0,
    // 'no-console': 0,
    // 'consistent-return': 0,
    // 'no-param-reassign': [2, { props: false }],
    // 'no-return-assign': [2, 'except-parens'],
    // 'no-use-before-define': 0,
    // 'import/prefer-default-export': 0,
    // 'import/no-cycle': 0,
    // 'react/no-array-index-key': 0,
    // 'react/forbid-prop-types': 0,
    // 'react/prop-types': [2, { skipUndeclared: true }],
    // 'react/jsx-fragments': [2, 'element'],
    // 'react/state-in-constructor': 0,
    // 'react/jsx-props-no-spreading': 0,
    // 'jsx-a11y/click-events-have-key-events': 0,
  },
  settings: {
    // Allows us to lint absolute imports within codebase
    // 'import/resolver': {
    //   node: {
    //     moduleDirectory: ['node_modules', 'src/'],
    //   },
    // },
    // 'import/extensions': ['.ts', '.tsx'],
  },
};
