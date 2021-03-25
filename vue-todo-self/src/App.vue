<template>
	<div id="app">
		<CommonHeader></CommonHeader>
		<div class="container">
			<TodoInput @addTodo="addOneItem"></TodoInput><!-- v-on:하위 컴포넌트에서 발생시킨 이벤트 이름 ="현재 컴포넌트의 메서드 명" -->
			<TodoList :propstodoItems="todoItems" @completedTodoItem="completedItem" @deleteTodoItem="deleteOneItem"></TodoList><!-- v-bind:내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 데이터 속성" -->
		</div>
		<CommonFooter @deleteTodoItemAll="deleteAllItem"></CommonFooter>
		<modal id="modal1" v-if="showModal2" v-on:close="showModal2=false">
			<h3 slot="header">안내</h3>
			<div slot="body">동일한 할 일이 존재합니다.</div>
		</modal>
	</div>
</template>

<script>
import "./assets/common.css" //import로 공통 css 적용
import CommonHeader from './components/CommonHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'   
import CommonFooter from './components/CommonFooter.vue'
import Modal from './components/modal/Modal.vue'

export default { 
	data() {
		return {
			todoItems : [],
			showModal2 : false
		}
	},
	methods : {
		addOneItem(item) {
			if(this.duplicateTxt(item)) {
				this.showModal2 = !this.showModal2;

				return;
			}
			const obj = {item : item , completed : false , regDate : this.setDate()}
			localStorage.setItem(item,JSON.stringify(obj));
			// console.log(JSON.stringify(obj))
			this.todoItems.push(obj);
			this.itemSorting();
		},

		completedItem(item) {
			item.completed = !item.completed;
			localStorage.removeItem(item.item);
			localStorage.setItem(item.item,JSON.stringify(item));
		},

		deleteOneItem(index) {
			// console.log('deleteOneItem');
			const deleteItemKey = this.todoItems[index].item;
			this.todoItems.splice(index,1);
			localStorage.removeItem(deleteItemKey);
		},

		deleteAllItem() {
			localStorage.clear();
			this.todoItems = [];	  
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

		duplicateTxt(item) {
			let j=false;
			let i=0;
			while (i < this.todoItems.length) {
				if(this.todoItems[i].item==item) {
					j=true;
					break;
				}
				i++;
			}

			return j
		},

		itemSorting() {
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
	},
	created() {
		const lcolStorageSize = localStorage.length;
		if(lcolStorageSize > 0) {
			for(let i=0; i < lcolStorageSize; i++) {

				const objKey = localStorage.key(i);

				if(objKey!=='loglevel:webpack-dev-server') {
					// console.log(JSON.parse(localStorage.getItem(objKey)));
					this.todoItems[i] = JSON.parse(localStorage.getItem(objKey));
				}
				// this.todoItems.push(JSON. parse())
				this.itemSorting();
			}
		}
		// localStorage.getItem()
	},	

	components : {
		CommonHeader,
		TodoInput,
		TodoList,
		CommonFooter,
		Modal
	}
}
</script>

<style>

</style>
