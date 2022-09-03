/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    {
      files: ['**/*.test.e2e.@(ts|tsx)'],
      extends: 'plugin:cypress/recommended',
    },
  ],
}

module.exports = config
