# eslint-config

Shareable ESLint configs. See the [ESLint docs](https://eslint.org/docs/user-guide/configuring) for
installation instructions.

## How to use

```jsonc
{
  "extends": [
    // Add base config for typescript project.
    "@stefanprobst/eslint-config-base",
    // Add recommended typescript-eslint rules which require type-checking.
    "@stefanprobst/eslint-config-base/type-checking"

    // Add eslint astro plugin.
    "@stefanprobst/eslint-config-astro",
    // Add eslint cypress plugin for `*.test.e2e.@(ts|tsx)` files.
    "@stefanprobst/eslint-config-cypress",
    // Add eslint jest plugin for `*.test.@(ts|tsx)` files.
    "@stefanprobst/eslint-config-jest",
    // Add eslint mdx plugin.
    "@stefanprobst/eslint-config-mdx",
    // Add eslint next.js plugin.
    "@stefanprobst/eslint-config-next",
    // Add eslint nuxt plugin.
    "@stefanprobst/eslint-config-nuxt",
    // Add eslint node.js plugin.
    "@stefanprobst/eslint-config-node",
    // Add eslint playwright plugin for `*.test.e2e.@(ts|tsx)` files.
    "@stefanprobst/eslint-config-playwright",
    // Add eslint react, react-hooks, jsx-a11y plugins, and jest-dom, testing-library plugins for `*.test.@(ts|tsx)` files..
    "@stefanprobst/eslint-config-react",
    // Add eslint solidjs plugin.
    "@stefanprobst/eslint-config-solid",
    // Add eslint storybook plugin for `*.storybook.@(ts|tsx)` files.
    "@stefanprobst/eslint-config-storybook",
  ]
}
```
