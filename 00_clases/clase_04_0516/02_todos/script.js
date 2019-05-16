/*
- Crear una función agregarTodo que appendee al elemento con id todos-container
el siguiente html:

`<div class="card mb-3 bounceIn faster">
    <div class="card-header">
        Titulo Tarea
    </div>
    <div class="card-body">
        <p class="card-text">Descripcion tarea</p>
    </div>
</div>`

Donde "Titulo tarea" y "Descripcion tarea" son reemplazados por los valores
de los inputs correspondientes. Si alguno de los campos está vacío, no debe 
agregar el todo.

- Crear una función eliminarTodos que borre todos los todos del elemento todos-container
- Bindear las funciones con los botones correspondientes
*/

let inputTitleElmnt = document.getElementById('todo-title'),
    inputDescriptionElmnt = document.getElementById('todo-description'),
    toDosContainer = document.getElementById('todos-container');

let agregarToDo = function(){

    if(inputTitleElmnt.value.lenght != 0 &&
       inputDescriptionElmnt.value.lenght != 0){

        toDosContainer.innerHTML += `<div class="card mb-3 bounceIn faster">
        <div class="card-header">
            ${inputTitleElmnt.value}
        </div>
        <div class="card-body">
            <p class="card-text">${inputDescriptionElmnt.value}</p>
        </div>
    </div>`
    }
}

let eliminarToDos = function(){
    toDosContainer.innerHTML = `<div class="col-6" id="todos-container"></div>` 
}