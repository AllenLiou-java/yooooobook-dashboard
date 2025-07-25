import { defineStore } from 'pinia'

export const usePracStore = defineStore('prac', () => {
    const userName: Ref<string> | null = ref('allen liou')
    const count: Ref<number> = ref(0)

    const doubleCount = computed<number>(() => {
        return count.value * 2
    })

    function addCount() {
        count.value++
    }

    return {
        userName,
        count,
        doubleCount,
        addCount
    }
})
