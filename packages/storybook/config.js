/** @type {import('eslint').Linter.Config} */
const config = {
	overrides: [
		{
			files: ["./**/*.stories.tsx"],
			extends: "plugin:storybook/recommended",
			rules: {
				"@typescript-eslint/explicit-module-boundary-types": "off",
				"import/no-default-export": "off",
				"react/function-component-definition": ["off", { namedComponents: "function-expression" }],
			},
		},
	],
};

module.exports = config;
