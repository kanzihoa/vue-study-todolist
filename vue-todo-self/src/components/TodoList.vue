<template>
	<div class="todo-list">
		<transition-group name="list" tag="ul">
			<li v-for="(todoItem , index) in this.propstodoItems" :key="todoItem.item">
				<div class="cont">
					<input type="checkbox" v-bind:id="'chkbox-'+index" v-bind:checked="todoItem.completed" @click="todoItemCompleted(todoItem)">
					<label :for="'chkbox-'+index">
						{{ todoItem.item }}
					</label>
				</div>
				<button class="btn-delete" type="button" v-on:click="todoItemDelete(index)">X</button>
			</li>
		</transition-group>
	</div>
</template>

<script>
export default {
	props : ['propstodoItems'],
	
	data() {
		return {

		}	
	},

	methods : {
		todoItemCompleted(todoItemParam) {
			this.$emit('completedTodoItem',todoItemParam);  
		},

		todoItemDelete(index) {
			this.$emit('deleteTodoItem',index);
		}
	}
}
</script>

<style>

</style> 