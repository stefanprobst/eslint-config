/** @type {import('eslint').Linter.Config} */
const config = {
	overrides: [
		{
			files: ["**/*.test.e2e.@(ts|tsx)"],
			extends: "plugin:playwright/playwright-test",
		},
	],
};

module.exports = config;
