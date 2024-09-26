import { renderTodo, todoAdderLogic, todoDeleteLogic, todoCompletedLogic } from "./render.js";
import { storeProxy } from "./store.js";


renderTodo();

window.addEventListener("todoAutoRefresh",()=>{
    renderTodo();
})

todoAdderLogic();
todoDeleteLogic();
todoCompletedLogic();




