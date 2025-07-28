import { defineConfig, presetWind3, transformerVariantGroup, transformerDirectives } from 'unocss'

// import presetWind3 from '@unocss/preset-wind3'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
    rules: [],
    shortcuts: [
        {
            'flex-center': 'flex justify-center items-center'
        },
        // dynamic shortcuts
        [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-8 px-12 rounded-lg`]
    ],
    theme: {
        colors: {
            myprimary: '#0000ff'
        },
        breakpoints: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1400px'

        }
    },
    presets: [
        presetWind3(),
        presetRemToPx({ baseFontSize: 4 })
    ],
    transformers: [transformerVariantGroup(), transformerDirectives()]
})
