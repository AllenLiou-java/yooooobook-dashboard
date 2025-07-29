<script setup lang="ts">
definePageMeta({
    layout: 'blank'
})

const pracStore = usePracStore()
const { userName, count, doubleCount } = storeToRefs(pracStore)
const { addCount } = pracStore

function addFive() {
    setTimeout(() => {
        pracStore.count += 5
    }, 1000)
}
</script>

<template>
    <div>
        <Prac
            foo="foo123"
            :bar="456"
        />
        <p class="bg-cyan text-16 text-myprimary hover:(bg-yellow text-red)">
            userName: {{ userName }}
        </p>
        <p class="text-primary">
            count: {{ count }}
        </p>
        <p>doubleCount: {{ doubleCount }}</p>
        <button
            class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
            @click="addCount"
        >
            add
        </button>

        <button
            class="btn-red"
            @click="addFive"
        >
            +5
        </button>
        <hr>
        <ul>
            <li>123</li>
            <li>456</li>
            <li>789</li>
        </ul>
        <a href="#">test a tag</a>
    </div>
</template>

<style lang="scss" scoped>
</style>
