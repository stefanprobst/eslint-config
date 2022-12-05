const project = [
  './tsconfig.json',
  './tsconfig.*.json',
  './apps/*/tsconfig.json',
  './apps/*/tsconfig.*.json',
  './examples/*/tsconfig.json',
  './examples/*/tsconfig.*.json',
  './packages/*/tsconfig.json',
  './packages/*/tsconfig.*.json',
]

/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  reportUnusedDisableDirectives: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-enum/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['simple-import-sort'],
  env: {
    browser: true,
    es2019: true,
    node: true,
  },
  parserOptions: {
    project,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project,
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'arrow-body-style': ['error', 'always'],
    /** @see https://github.com/typescript-eslint/typescript-eslint/issues/1277 */
    // "consistent-return": "error",
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-implicit-coercion': 'error',
    'no-param-reassign': 'error',
    'no-restricted-globals': ['error', { name: 'isNaN', message: 'Use Number.isNaN instead.' }],
    'no-throw-literal': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/consistent-type-exports': [
      'error',
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: false }],
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/sort-type-union-intersection-members': 'error',
    '@typescript-eslint/strict-boolean-expressions': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    // TODO: requires new release of eslint-plugin-import
    // "import/consistent-type-specifier-style": "error",
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['**/*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}

module.exports = config
