// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui'],
    devtools: { enabled: true },
    compatibilityDate: '2025-07-15',
    typescript: {
        typeCheck: true
    },
    eslint: {
        config: {
            stylistic: true
        }
    }
})
