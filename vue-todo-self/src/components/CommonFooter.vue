<template>
	<footer class="footer">
		<button type="button" class="btn-delete-all" @click="deleteTodoItemAll">할일 전체 삭제</button>
		<address>copyright@</address>
	</footer>
</template>

<script>
export default {
	methods: {
		deleteTodoItemAll() {
			this.$emit('deleteTodoItemAll');
		}
	}
}
</script>

<style>

</style>