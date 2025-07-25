// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
    modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@pinia/nuxt'],
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    compatibilityDate: '2025-07-15',
    vite: {
        plugins: [tailwindcss()]
    },
    typescript: {
        typeCheck: true
    },
    eslint: {
        config: {
            stylistic: true
        }
    }
})
