<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtWelcome />
		{{ title }}
		{{ test }}
		{{ stringList }}
		{{ numberList }}
		{{ funList }}
		<button @click="testFun('hello')">
			test
		</button>
	</div>
</template>

<script lang="ts" setup>
const year: number = 2022
const title: string = `${year} iThome 鐵人賽`
const test: string = 'test'
const stringList: Array<string> = ['foo', 'bar', 'baz']
const numberList: Array<number> = [
    1, 2, 3
]
const funList: Array<object> = [
    function foo() { funa() }, function bar() { funb() }
]

const funa = () => '123'
const funb = () => '456'

const testFun = (test: string) => {
    console.log('say', test)
}
</script>
