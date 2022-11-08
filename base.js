/**
 * 依赖版本
		eslint ^8.24.0
		@babel/core ^7.20.2
		@babel/eslint-parser ^7.19.1
 */

const common = require('./rules/common.js');

module.exports = {
	root: true,
	parser: '@babel/eslint-parser',
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
		ecmaFeatures: {
			globalReturn: false,
			impliedStrict: true,
			jsx: true
		},
		requireConfigFile: false,
		allowImportExportEverywhere: false
	},
	env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
		jquery: true
	},
	rules: common
};