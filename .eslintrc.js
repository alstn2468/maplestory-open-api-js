module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'eslint-plugin-simple-import-sort', 'unused-imports'],
  ignorePatterns: ['**/dist/*'],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/no-cycle': ['error', { allowUnsafeDynamicCyclicDependency: true }],
    'import/no-unresolved': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    eqeqeq: ['warn', 'smart'],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    'eol-last': 'error',
    semi: ['error', 'always'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: false },
    ],
    'unused-imports/no-unused-imports-ts': ['error'],
    'comma-spacing': ['error', { before: false, after: true }],
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/newline-after-import': [
      'error',
      { count: 1, considerComments: true },
    ],
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/ban-types': 'warn',
    'import/named': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './src',
      },
    },
  },
};
