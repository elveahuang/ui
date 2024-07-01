const { FlatCompat } = require('@eslint/eslintrc');
const eslint = require('@eslint/js');
const eslintTypescript = require('typescript-eslint');
const eslintParser = require('@typescript-eslint/parser');
const vueParser = require('vue-eslint-parser');
const globals = require('globals');

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

/** @type {import("eslint").Config} */
const config = [
    eslint.configs.recommended,
    ...eslintTypescript.configs.recommended,
    ...compat.plugins('vue', 'prettier'),
    ...compat.extends('plugin:vue/vue3-essential', '@vue/eslint-config-typescript', '@vue/eslint-config-prettier'),
    {
        ignores: ['**/node_modules/', '**/dist/'],
    },
    {
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: eslintParser,
                ecmaFeatures: {
                    jsx: true,
                },
            },
            sourceType: 'module',
            ecmaVersion: 'latest',
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node,
            },
        },
    },
    {
        rules: {
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/require-valid-default-prop': 'off',
            'vue/no-mutating-props': 'off',
            'vue/valid-v-for': 'off',
            'no-async-promise-executor': 'off',
        },
    },
];

module.exports = config;
