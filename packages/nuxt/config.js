// import nuxtConfig from "@next/eslint-config";
// import globals from "globals";
import ts from "typescript-eslint";

/**
 * Note that we *don't* add the nuxt eslint config here.
 * We rather depend on the [`@nuxt/eslint` module](https://eslint.nuxt.com/packages/module),
 * which will also set up auto-imports as globals.
 * Make sure to set `standalone` to `false` when setting up `@nuxt/eslint` since we provide
 * out own js, ts, and vue configs.
 */
const config = ts.config({
	files: ["**/*.vue"],
	languageOptions: {
		/**
		 * Auto-imports support for `vue`.
		 *
		 * @see https://eslint.vuejs.org/user-guide/#auto-imports-support
		 * @see https://github.com/vuejs/eslint-plugin-vue/pull/2422
		 */
		globals: {
			computed: "readonly",
			defineEmits: "readonly",
			defineExpose: "readonly",
			defineProps: "readonly",
			onMounted: "readonly",
			onUnmounted: "readonly",
			reactive: "readonly",
			ref: "readonly",
			shallowReactive: "readonly",
			shallowRef: "readonly",
			toRef: "readonly",
			toRefs: "readonly",
			watch: "readonly",
			watchEffect: "readonly",
		},
	},
	rules: {
		/**
		 * Allow single emit function as `defineEmits` interface.
		 */
		"@typescript-eslint/prefer-function-type": "off",
		"vuejs-accessibility/anchor-has-content": [
			"error",
			{ components: ["NuxtLink", "NuxtLocaleLink"] },
		],
	},
});

export default config;
