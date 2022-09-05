/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    {
      files: ['**/*.astro'],
      extends: ['plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'astro/jsx-a11y/anchor-is-valid': [
          'error',
          { components: ['Link'], aspects: ['invalidHref', 'preferButton'] },
        ],
        'astro/jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],
        'astro/jsx-a11y/no-onchange': 'off',
        'astro/jsx-a11y/no-redundant-roles': ['error', { ul: ['list'], ol: ['list'] }],
      },
    },
  ],
}

module.exports = config
