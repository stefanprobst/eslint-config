const project = require('@stefanprobst/eslint-config/project')

/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    {
      files: ['**/*.vue'],
      extends: [
        'plugin:vue/vue3-recommended',
        'plugin:vuejs-accessibility/recommended',
        'prettier',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        project,
      },
    },
  ],
}

module.exports = config
