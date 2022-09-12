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
      rules: {
        'vuejs-accessibility/label-has-for': [
          'error',
          {
            required: {
              some: ['nesting', 'id'],
            },
          },
        ],
        'vuejs-accessibility/no-autofocus': ['error', { ignoreNonDOM: true }],
        'vuejs-accessibility/no-onchange': 'off',
        'vuejs-accessibility/no-redundant-roles': ['error', { ul: ['list'], ol: ['list'] }],
      },
    },
  ],
}

module.exports = config
