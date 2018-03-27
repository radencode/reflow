module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		strict: 0,
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		'jsx-quotes': ['error', 'prefer-single'],
		semi: ['error', 'always'],
		'react/no-unknown-property': [0],
	},
};
