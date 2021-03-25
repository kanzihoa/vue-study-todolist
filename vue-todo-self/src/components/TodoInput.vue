<template>
	<div class="box-todo-input">
		<input type="text" class="full" v-model="newTodoItem" @keyup.enter="addTodo" v-focus>
		<button type="button" @click="addTodo">추가</button>
		
		<modal v-if="showModal" v-on:close="showModal=false">
			<h3 slot="header">안내</h3>
			<div slot="body">할 일을 추가해 주세요!</div>
		</modal>
	</div>
</template>

<script>

import Modal from "./modal/Modal.vue"

export default {
	data() {
		return {
			newTodoItem : "",
			showModal: false
		}
	},

	methods : {
		
		addTodo() {
			if(this.newTodoItem=="") {
				// alert('할 일을 입력해 주세요!');
				this.showModal = !this.showModal;
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
	},

	components : {
		Modal
	}
}


</script>

<style>

</style>