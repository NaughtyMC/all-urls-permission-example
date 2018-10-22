module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'module',
	},
	env: {
		es6: true,
		browser: true,
		webextensions: true,
		node: true
	},
	extends: ['airbnb-base', 'prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': 'error',
		'no-underscore-dangle': 'off',
		'no-plusplus': ['error', {
			allowForLoopAfterthoughts: true,
		}],
		'no-use-before-define': ['error', {
			functions: false,
			classes: true,
			variables: true,
		}],
	}
}
