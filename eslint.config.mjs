// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

import stylistic from '@stylistic/eslint-plugin'

export default withNuxt(
    // Your custom configs here
    {
        files: ['**/*.{js,ts,mjs,vue}'],
        // 定義 ESLint 插件
        plugins: {
            '@stylistic': stylistic
        },
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        },
        rules: {
            'no-undef': 'off',
            // 強制一致的縮排
            '@stylistic/indent': ['error', 4],
            '@stylistic/max-len': ['error',
                {
                    code: 120,
                    tabWidth: 4,
                    ignoreComments: true,
                    ignoreTrailingComments: true,
                    ignoreUrls: true
                }],
            // 強制一致使用反引號、雙引號或單引號
            '@stylistic/quotes': ['error', 'single'],
            // 要求物件字面量、類型字面量、介面和枚舉屬性名稱用引號引起來
            '@stylistic/quote-props': ['error', 'as-needed'],
            // 強制在每個陣列元素後換行
            '@stylistic/array-element-newline': ['error', { multiline: true }],
            // 要求箭頭函數參數周圍有括號
            '@stylistic/arrow-parens': ['error', 'always'],
            // 強制區塊的括號樣式一致
            '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
            // 要求或不允許尾隨逗號
            '@stylistic/comma-dangle': ['error', 'never'],
            // 強制限制每行允許的最大語句數
            '@stylistic/max-statements-per-line': ['error', { max: 2 }]

        }
    }
)
