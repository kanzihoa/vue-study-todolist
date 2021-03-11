<template>
	<div class="box-todo-input">
		<input type="text" class="full" v-model="newTodoItem" v-on:keyup.enter="addTodo">
		<button type="button" v-on:click="addTodo">추가</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			newTodoItem : ""
		}
	},

	methods : {
		addTodo() {
			if(this.newTodoItem=="") {
				alert('할 일을 입력해 주세요!');
				return;
			}

			this.$emit('addTodo',this.newTodoItem);
			// console.log(this.newTodoItem);
			// const obj = {item : this.newTodoItem , completed : false , regDate : this.setDate()}
			// localStorage.setItem(this.newTodoItem,JSON.stringify(obj));
			this.clearTodoItem();
		},

		clearTodoItem() {
			this.newTodoItem="";
		}
	}
}
</script>

<style>

</style>