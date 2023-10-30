const ToDo = require('./toDoClass.js')

function TodoManagement() {
    let todos = []
    let iD = 1

    function addTodo(desc) {
        const todo = new ToDo(iD++, desc)
        return todos.push(todo) //.push return new length
       
    }
    function findTodo(searchId) {
        return todos.find(el => el.id === searchId)
    }
    function findIndexTodo(searchId) {
        return todos.findIndex(el => el.id === searchId)
    }
    function removeTodo(removeId) {
        return todos.forEach((el, i) => {
            if (el.id === removeId)
                todos.splice(i, 1)
        })
    }
    function getTodos() {
        return todos
    }
    return {
        addTodo
        , findTodo
        , findIndexTodo
        , removeTodo
        , getTodos
    }
}
const { addTodo
    , findTodo
    , findIndexTodo
    , removeTodo
    , getTodos } = TodoManagement()

console.log(addTodo('doEat'));
console.log(addTodo('doSleep'));
console.log(addTodo('dosomething'));
console.log(addTodo("lol"));
console.log(getTodos());
console.log('------------- findTodo -------------');
console.log(findTodo(1));
console.log('------------- findIndexTodo -------------');

console.log(findIndexTodo(1));
console.log('------------- remove-------------');

removeTodo(5);
console.log(getTodos());