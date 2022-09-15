module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'standard-with-typescript',
		'plugin:prettier/recommended',
		'eslint-config-prettier',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
		extraFileExtensions: ['.vue'],
	},
	plugins: ['vue', 'prettier'],
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'prettier/prettier': 'error',
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/triple-slash-reference': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/consistent-type-assertions': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
	},
};
