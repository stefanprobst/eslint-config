# eslint-config

Shareable ESLint configs. See the [ESLint docs](https://eslint.org/docs/user-guide/configuring) for
installation instructions.

## How to use

```jsonc
{
  "extends": [
    // Add base config for typescript project.
    "@stefanprobst/eslint-config-base",
    // Add additional rules from strict typescript-eslint preset.
    "@stefanprobst/eslint-config-base/strict"

    // Add eslint astro plugin.
    "@stefanprobst/eslint-config-astro",
    // Add eslint cypress plugin for `./e2e/**/*.test.@(ts|tsx)` files.
    "@stefanprobst/eslint-config-cypress",
    // Add eslint jest plugin for `*.test.@(ts|tsx)` files.
    "@stefanprobst/eslint-config-jest",
    // Add eslint mdx plugin.
    "@stefanprobst/eslint-config-mdx",
    // Add eslint next.js plugin.
    "@stefanprobst/eslint-config-next",
		// Add eslint node.js plugin.
    "@stefanprobst/eslint-config-node",
    // Add eslint nuxt plugin.
    "@stefanprobst/eslint-config-nuxt",
    // Add eslint playwright plugin for `./e2e/**/*.test.@(ts|tsx)` files.
    "@stefanprobst/eslint-config-playwright",
    // Add eslint react plugin.
    "@stefanprobst/eslint-config-react",
    // Add eslint react-testing-library plugin.
    "@stefanprobst/eslint-config-react-test",
    // Add eslint solidjs plugin.
    "@stefanprobst/eslint-config-solid",
    // Add eslint storybook plugin for `*.stories.@(ts|tsx)` files.
    "@stefanprobst/eslint-config-storybook",
		// Add eslint vue plugin.
    "@stefanprobst/eslint-config-vue",
  ]
}
```
