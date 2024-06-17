const template = /*html*/`
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<div id="app">
<div class="header">
  <h2 style="margin:5px">My To Do List</h2>
  <input type="text" id="myInput" v-model="todo.title" placeholder="Title...">
  <button class="addBtn" @click="todoInsert">Add</button>
</div>
<div class="btnGroup">
  <button class="Btn" @click="referenceContent">조회</button>

</div>
<ul id="myUL">
  <li v-for="(todo, index) in todos" :class="{checked: todo.todoyn}" >
    {{todo.title}}<button @click="todoDelete(todo.id)" class="close">X</button></li>
</ul>
</div>`
;
const url='https://jsonplaceholder.typicode.com/todos';
export default{
    template,
    data(){
        return{todos:[], todo:{}}
    },
    created(){
      axios.get(url)
        
      .then(json => {
         console.log(json);
         this.todos=json.data})
    },
    methods:{

        todoInsert(){
          axios.post(url, this.todo)
          .then(json => this.todos.push(json.data))

        },
        referenceContent(){

        },
        todoDelete(index){
          axios.delete(`${url}/${index}`)
          .then(json => {
            let data = this.todos.filter(a =>a.id != index)
            this.todos = data;
          })
            
        }
    }

}