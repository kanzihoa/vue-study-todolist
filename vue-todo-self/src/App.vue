<template>
	<div id="app">
		<CommonHeader></CommonHeader>
		<div class="container">
			<TodoInput></TodoInput>
			<TodoList></TodoList>
		</div>
		<CommonFooter></CommonFooter>
	</div>
</template>

<script>
import "./assets/common.css" //import로 공통 css 적용
import CommonHeader from './components/CommonHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import CommonFooter from './components/CommonFooter.vue'

export default {
	components : {
		CommonHeader,
		TodoInput,
		TodoList,
		CommonFooter
	}
}
</script>

<style>

</style>
