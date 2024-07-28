import { FlatCompat } from "@eslint/eslintrc";
// import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
// import reactPlugin from "eslint-plugin-react";
// @ts-expect-error Missing declaration file.
import reactCompilerPlugin from "eslint-plugin-react-compiler";
// import reactHooksPlugin from "eslint-plugin-react-hooks";
// import globals from "globals";
import ts from "typescript-eslint";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const config = ts.config(
	// {
	// 	languageOptions: {
	// 		globals: {
	// 			...globals.browser,
	// 			...globals.nodeBuiltin,
	// 		},
	// 	},
	// },
	// @ts-expect-error Type incompatibility between `eslint` and `typescript-eslint`.
	...compat.extends(
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
	),
	{
		plugins: {
			"react-compiler": reactCompilerPlugin,
		},
		settings: {
			react: {
				version: "detect",
			},
			formComponents: ["Form"],
			linkComponents: [{ name: "Link" }, { name: "NavLink" }],
		},
		rules: {
			"jsx-a11y/anchor-is-valid": ["error", { components: ["Link"] }],
			"jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
			"jsx-a11y/no-redundant-roles": [
				"error",
				{
					ul: ["list"],
					ol: ["list"],
				},
			],
			"react/boolean-prop-naming": "error",
			"react/button-has-type": "error",
			"react/function-component-definition": "error",
			"react/jsx-boolean-value": ["error", "always"],
			"react/jsx-no-leaked-render": "error",
			"react/jsx-no-target-blank": "off",
			"react/jsx-no-useless-fragment": "error",
			"react/jsx-sort-props": ["error", { reservedFirst: true }],
			"react/prop-types": "off",
			"react-compiler/react-compiler": "error",
		},
	},
	{
		files: ["**/*.tsx"],
		rules: {
			/**
			 * JSX event handler props generally only accept `void` return type, but inline react server
			 * actions must be async. also, some libraries like `react-hook-form` expect to be able to
			 * pass promise-returning callbacks.
			 *
			 * @see https://github.com/typescript-eslint/typescript-eslint/issues/4650
			 */
			"@typescript-eslint/no-misused-promises": [
				"error",
				{ checksVoidReturn: { arguments: false, attributes: false } },
			],
		},
	},
);

export default config;
