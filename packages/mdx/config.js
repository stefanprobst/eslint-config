/** @type {import('eslint').Linter.Config} */
const config = {
  overrides: [
    {
      files: ['**/*.@(md|mdx)'],
      extends: ['plugin:mdx/recommended'],
    },
  ],
}

module.exports = config
