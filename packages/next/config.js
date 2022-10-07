/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    {
      files: ['**/*.@(ts|tsx)'],
      extends: ['plugin:@next/next/core-web-vitals'],
      rules: {
        'import/no-default-export': 'error',
      },
    },
    {
      files: ['*.config.ts', '*.config.mjs', '**/*.d.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['./src/pages/**/*.page.tsx'],
      rules: {
        '@typescript-eslint/no-namespace': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['./src/pages/**/*.api.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
}

module.exports = config
