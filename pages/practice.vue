<template>
    <div>
        <Prac
            foo="foo123"
            :bar="456"
        />
        <p>userName: {{ userName }}</p>
        <p>count: {{ count }}</p>
        <p>doubleCount: {{ doubleCount }}</p>
        <button
            class="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800"
            @click="addCount"
        >
            add
        </button>

        <button
            class="my-button mx-4 px-6 py-2"
            @click="addFive"
        >
            +5
        </button>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'custom'
})

const pracStore = usePracStore()
const { userName, count, doubleCount } = storeToRefs(pracStore)
const { addCount } = pracStore

const addFive = () => {
    setTimeout(() => {
        pracStore.count += 5
    }, 1000)
}
</script>

<style scoped>
</style>
