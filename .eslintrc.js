module.exports = {
	env: {
		node: true,
		es2022: true,
		browser: true,
		commonjs: true,
	},
	plugins: ['prettier'],
	extends: ['prettier', 'eslint:recommended', 'plugin:prettier/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		'prettier/prettier': 'error',
	},
};
