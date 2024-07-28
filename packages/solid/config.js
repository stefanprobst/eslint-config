import { FlatCompat } from "@eslint/eslintrc";
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
	...compat.extends("plugin:jsx-a11y/recommended", "plugin:solid/typescript"),
	{
		rules: {
			"jsx-a11y/anchor-is-valid": ["error", { components: ["Link"] }],
			"jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
			"jsx-a11y/no-onchange": "off",
			"jsx-a11y/no-redundant-roles": [
				"error",
				{
					ul: ["list"],
					ol: ["list"],
				},
			],
		},
	},
);

export default config;
