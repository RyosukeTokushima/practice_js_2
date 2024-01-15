const lists = [];

// function showTodos () {
//     const todo = document.getElementById("addTodo");
//     todo.innerHTML = '';
//     lists.forEach(function(item, index){
//         todo.innerHTML += `${item} <button onclick="deleteTask(${index})">削除</button><br>`;
// });
// }
const todos = document.getElementById('addTodo');

function showTodos () {
    todos.innerHTML = "";
    lists.forEach(function(item, index){
        const newElement = document.createElement('div');
        newElement.innerHTML = `${item} <button onclick="deleteTask(${index})">削除</button><br>`;
        todos.appendChild(newElement);
    });
}

function deleteTask(index) {
    lists.splice(index, 1);
    showTodos();
}

document.getElementById("addBtn").addEventListener('click', function() {
    const element = document.getElementById('TodoList');
    console.log(element.value);  
    lists.push(element.value);
    showTodos();
    element.value = '';
});