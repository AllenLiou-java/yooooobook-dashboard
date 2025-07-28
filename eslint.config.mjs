// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import stylistic from '@stylistic/eslint-plugin'

export default withNuxt(
    // @ts-ignore
    // Your custom configs here
    {
        files: ['**/*.{js,ts,mjs,vue}'],
        // 定義 ESLint 插件
        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            // 'unocss/order': 'error',
            // 'no-undef': 'off',
            'vue/html-indent': ['error', 4],
            'vue/multi-word-component-names': 'off',
            // 強制一致的縮排
            '@stylistic/indent': ['error', 4],
            '@stylistic/no-tabs': ['error', { allowIndentationTabs: true }],
            // 強制一致使用反引號、雙引號或單引號
            '@stylistic/quotes': ['error', 'single'],
            // 要求物件字面量、類型字面量、介面和枚舉屬性名稱用引號引起來
            '@stylistic/quote-props': ['error', 'as-needed'],
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
