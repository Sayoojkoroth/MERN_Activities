 export const store = {
    todos : [ 
                {
                    id:"1",
                    todo:"Clean the utensils",
                    isStriked: true
                },
                {
                    id:"2",
                    todo:"Iron the clothes",
                    isStriked:false
                },
                {
                    id:"3",
                    todo:"Take dog on a walk",
                    isStriked:false
                }
            ]
        }

const storeHandler ={
    get(target, property){
        console.log("getting");
        return target[property];
    },
    set(target, property, value){
        console.log("setting");
        target[property] = value;
        if(property=="todos"){
            window.dispatchEvent(new Event("todoAutoRefresh"));
        }
        return true;
    }
}

export const storeProxy = new Proxy(store, storeHandler);

export const addTodo2Store = (newtodoData) =>{
    storeProxy.todos = [...storeProxy.todos, newtodoData];
}

export const deletetodoFromStore = (todoId) =>{
    storeProxy.todos = storeProxy.todos.filter((todoItem)=>{
        return todoItem.id != todoId      
    })
}