import { FlatCompat } from "@eslint/eslintrc";
import playwrightPlugin from "eslint-plugin-playwright";
// import globals from "globals";
import ts from "typescript-eslint";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const config = ts.config({
	...playwrightPlugin.configs["flat/recommended"],
	files: ["./e2e/**/*.@(spec|test).@(ts|tsx)"],
});

export default config;
