/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    {
      files: ['**/*.test.@(js|ts|tsx)'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
    },
  ],
}

module.exports = config
