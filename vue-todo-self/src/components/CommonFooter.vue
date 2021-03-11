<template>
	<footer class="footer">
		<button type="button" class="btn-delete-all" v-on:click="removeTodoItemAll">할일 전체 삭제</button>
		<address>copyright@</address>
	</footer>
</template>

<script>
export default {
	methods: {
		removeTodoItemAll() {
			localStorage.clear();
		}
	}
}
</script>

<style>

</style>