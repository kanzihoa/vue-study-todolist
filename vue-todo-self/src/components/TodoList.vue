<template>
	<div class="todo-list">
		<ul>
			<li v-for="(todoItem , index) in this.todoItems" v-bind:key="todoItem.item">
				<div class="cont">
					<input type="checkbox" v-bind:id="'chkbox-'+index" v-bind:checked="todoItem.completed" v-on:click="todoItemCompleted(todoItem)">
					<label v-bind:for="'chkbox-'+index">
						{{ todoItem.item }}
					</label>
				</div>
				<button class="btn-delete" type="button" v-on:click="todoItemDelete(index)">X</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data : function() {
		return {
			todoItems: []
		}
	},
	methods : {
		todoItemCompleted(todoItemParam) {
			todoItemParam.completed = !todoItemParam.completed;
			localStorage.removeItem(todoItemParam.item);
			localStorage.setItem(todoItemParam.item,JSON.stringify(todoItemParam))
		},

		todoItemDelete(index) {
			const deleteItemKey = this.todoItems[index].item;
			this.todoItems.splice(index,1);
			localStorage.removeItem(deleteItemKey);
		}
	},
	created : function(){
		const lcolStorageSize = localStorage.length;
		
		if(lcolStorageSize > 0) {
			for(let i=0; i < lcolStorageSize; i++) {

				const objKey = localStorage.key(i);

				if(objKey!=='loglevel:webpack-dev-server') {
					// console.log(JSON.parse(localStorage.getItem(objKey)));
					this.todoItems[i] = JSON.parse(localStorage.getItem(objKey));
				}
				// this.todoItems.push(JSON. parse())
			}
			this.todoItems = this.todoItems.filter(value => value!='empty');
			this.todoItems.sort(function (a, b) {
				if (a.regDate < b.regDate) {
					return 1;
				}   
				if (a.regDate > b.regDate) {
					return -1;
				}
				// a must be equal to b
				return 0;
			});
		}
		// localStorage.getItem()
	}
}
</script>

<style>

</style>