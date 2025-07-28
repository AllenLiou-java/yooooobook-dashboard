// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ['@nuxt/image', '@nuxt/ui', '@pinia/nuxt', '@unocss/nuxt', '@nuxt/eslint'],
    devtools: { enabled: true },
    css: ['~/assets/style/main.scss'],
    compatibilityDate: '2025-07-15',
    vite: {},
    typescript: {
        typeCheck: true
    },
    unocss: {
        nuxtLayers: true
    }
})
