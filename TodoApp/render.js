import { storeProxy, addTodo2Store } from "./store.js"
import { deletetodoFromStore, striketodoInStore } from "./store.js";

export function renderTodo() {
    const listContainer = document.querySelector(".todoContainer");
    const todoLists = storeProxy.todos.map((todoItem) => {
        return `<li class="listrow" data-id=${todoItem.id}>
                    <span class="todotext ${todoItem.isStriked ? "strike" : " "}">${todoItem.todo}</span>
                    <div class="togglers">
                        <input type="checkbox" class="checkmark id="" name="" value="" ${todoItem.isStriked ? "checked" : " "}>
                        <button class="del_btn">X</button>
                    </div> 
                </li>`
    }).join(" ")
    listContainer.innerHTML = todoLists;
}

export const todoAdderLogic = () => {
    const user_input = document.getElementById("todo");
    const Add_btn = document.querySelector(".form-container");
    Add_btn.addEventListener("submit", (e) => {
        e.preventDefault();
        const newtodoData = {id:4, todo:user_input.value, isStriked:false};
        addTodo2Store(newtodoData);
        Add_btn.reset();
    })
}

export const todoDeleteLogic = () =>{
    const listContainer = document.querySelector(".todoContainer");
    listContainer.addEventListener("click", (e)=>{
        if(e.target.classList.contains("del_btn")){
            let todoId= e.target.closest("li").dataset.id
            deletetodoFromStore(todoId);
        }
    })
}

export const todoCompletedLogic = () =>{
    const listContainer = document.querySelector(".todoContainer");
    listContainer.addEventListener("click", (e)=>{
        if(e.target.classList.contains("checkmark")){
            const todoId = e.target.closest("li").dataset.id;
            striketodoInStore(todoId);
        }
    })
}

