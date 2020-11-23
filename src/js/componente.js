


import { Todo, TodoList } from "../classes";
import { todoList } from '../index';

const divTodoList = document.querySelector('.todo-list');
const txtInput    = document.querySelector('.new-todo');
const btnBorrar   = document.querySelector('.clear-completed');
const ulFiltros   = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
export const countPendientes = document.querySelector('.todo-count');



export const crearTodoHtml = (todo) => {

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''}>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

txtInput.addEventListener('keyup', (event) =>{
    
    if (event.keyCode == 13 && txtInput.value.length > 0){
        const nuevoTodo = new Todo(txtInput.value);

        todoList.nuevoTodo(nuevoTodo);

        crearTodoHtml(nuevoTodo)

        txtInput.value = '';
    }
});

divTodoList.addEventListener('click', (event) =>{
    //console.log('click');
    // console.log(event);
    // console.log(event.target.localName); // input, label, button
    // console.log(event.target.parentElement.parentElement); // li , div 
    // console.log(event.target.parentElement.parentElement.getAttribute('data-id')); // inprime el id

    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');


    if (nombreElemento.includes('input')){
        todoList.marcarCompletado(todoId);
        
        todoElemento.classList.toggle('completed');

    }else if (nombreElemento.includes('button')){
        todoList.eliminarTodo(todoId)
        divTodoList.removeChild(todoElemento);
    }
    
});

btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletados();

    for ( let i = divTodoList.children.length-1; i >= 0; i--){
        const elemento = divTodoList.children[i];

        if (elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
    
});

ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;

    if (!filtro) {return;}

    anchorFiltros.forEach(elem => elem.classList.remove('selected'));

    event.target.classList.add('selected');

    for ( const elemento of divTodoList.children){
        
        //se remueve la clase hidden de todos los elementos
        elemento.classList.remove('hidden');
        
        const completado = elemento.classList.contains('completed');
        
        //se decide donde poner la clase hidden
        switch (filtro ) {
            case 'Pendientes':
                if(completado) {
                    elemento.classList.add('hidden');
                }
            break;
            case 'Completados':
                if(!completado) {
                    elemento.classList.add('hidden');
                }
            break;
        }

        
    }  
});


// const count = countPendientes.firstElementChild;
// count.innerHTML = todoList.contarPendientes();