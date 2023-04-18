/** @type {import('eslint').Linter.Config} */
const config = {
	overrides: [
		{
			files: ["./**/*.@(ts|tsx)"],
			extends: ["plugin:jsx-a11y/recommended", "plugin:solid/typescript"],
			rules: {
				"jsx-a11y/anchor-is-valid": ["error", { components: ["Link"] }],
				"jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
				"jsx-a11y/no-onchange": "off",
				"jsx-a11y/no-redundant-roles": ["error", { ul: ["list"], ol: ["list"] }],
			},
		},
	],
};

module.exports = config;
