/** @type {import('eslint').Linter.Config} */
const config = {
	extends: ["plugin:@typescript-eslint/recommended-requiring-type-checking"],
	rules: {
		// '@typescript-eslint/explicit-function-return-type': 'error',
	},
};

module.exports = config;
