import { renderTodo, todoAdderLogic, todoDeleteLogic } from "./render.js";
import { storeProxy } from "./store.js";


renderTodo();

window.addEventListener("todoAutoRefresh",()=>{
    renderTodo();
})

todoAdderLogic();
todoDeleteLogic();





