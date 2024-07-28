import { FlatCompat } from "@eslint/eslintrc";
import ts from "typescript-eslint";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

const config = ts.config({
	...compat.extends("plugin:mdx/recommended"),
	files: ["**/*.@(md|mdx)"],
});

export default config;
