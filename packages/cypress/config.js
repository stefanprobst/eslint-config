const project = [
	"./cypress/tsconfig.json",
	"./apps/*/cypress/tsconfig.json",
	"./examples/*/cypress/tsconfig.json",
	"./packages/*/cypress/tsconfig.json",
];

/** @type {import('eslint').Linter.Config} */
const config = {
	overrides: [
		{
			files: [
				"./cypress/**/*.@(ts|tsx)",
				"./apps/*/cypress/**/*.@(ts|tsx)",
				"./examples/*/cypress/**/*.@(ts|tsx)",
				"./packages/*/cypress/**/*.@(ts|tsx)",
			],
			parserOptions: {
				project,
			},
		},
		{
			files: ["./e2e/**/*.test.@(ts|tsx)"],
			extends: "plugin:cypress/recommended",
		},
	],
};

module.exports = config;
