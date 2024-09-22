import { storeProxy } from './store.js'

function renderTodos() {
    const areaToInsert = document.querySelector(".todoContainer")
    areaToInsert.innerHTML = todoList
}

const todoList = storeProxy.todos.map((item)=>{
    return `<li class="listrow" data-id=${item.id}>
                                <span class="${item.isStriked?"strike":" "}">${item.todo}</span>
                                <div class="togglers">
                                    <input type="checkbox" id="" name="" value="" ${item.isStriked ?"checked" : ""}>
                                    <button>X</button>
                                </div> 
                             </li>`
}).join(" ")


renderTodos();

