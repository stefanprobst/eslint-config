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
      files: ['./src/pages/**/*.page.tsx'],
      rules: {
        '@typescript-eslint/no-namespace': 'off',
        'import/no-default-export': 'off',
      },
    },
  ],
}

module.exports = config
