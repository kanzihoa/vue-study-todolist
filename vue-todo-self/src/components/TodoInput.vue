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
			// console.log(this.newTodoItem);
			const obj = {item : this.newTodoItem , completed : false , regDate : this.setDate()}
			localStorage.setItem(this.newTodoItem,JSON.stringify(obj));
			
			this.clearTodoItem();
		},

		setDate() {
			const date = new Date()
			const regDate = date.getFullYear()
							+dateAddZero(date.getMonth()+1)
							+dateAddZero(date.getDate())
							+dateAddZero(date.getHours())
							+dateAddZero(date.getMinutes())
							+dateAddZero(date.getSeconds())
							+"."
							+date.getMilliseconds();		
			// console.log(regDate);
			function dateAddZero(dTime) {
				const str= (dTime<10) ? "0"+dTime : dTime
				return str;
			}
			return regDate
		},

		clearTodoItem() {
			this.newTodoItem="";
		}
	}
}
</script>

<style>

</style>