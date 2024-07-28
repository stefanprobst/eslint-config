import { FlatCompat } from "@eslint/eslintrc";
import playwrightPlugin from "eslint-plugin-playwright";
import ts from "typescript-eslint";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const config = ts.config({
	files: ["./e2e/**/*.@(spec|test).@(ts|tsx)"],
	...compat.config(playwrightPlugin.configs.recommended),
});

export default config;
