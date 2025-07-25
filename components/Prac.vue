<template>
    <div>
        <p>foo: {{ foo }}</p>
        <p>bar: {{ bar }}</p>
    </div>
</template>

<script setup lang="ts">
/**
 * props 相關寫法
 */
// // 1. runtime declaration
// const props = defineProps({
//     foo: { type: String, required: true },
//     bar: Number
// })

// 2. type-based declaration - 透過泛型參數直接設定type
// ? 等同於 required: false
// 透過以下解構方式設定預設值 (版本3.5↑ 支援)
const { foo = 'defaultFoo', bar = 111 } = defineProps<{
    foo?: string
    bar?: number
}>()

// // 3. 獨立出 interface
// interface Props {
//     foo: string
//     bar?: number
// }
// const props = defineProps<Props>()

// // 4. interface集中管理，並透過import引入指定的interface
// import type { Props } from '~/types/typrac'

// const props = defineProps<Props>()

/**
 * emits 相關寫法
 */

// const emit = defineEmits<{
//     change: [id: number]
//     update: [value: string]
// }>()

onMounted(() => {
    console.log('props', foo, bar)
})
</script>

<style scoped>

</style>
