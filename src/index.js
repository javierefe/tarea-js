
import './styles.css';
//importara lo que haya en index.js del directorio claassses
import { Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componente';
// import {Todo} from './classes/todo.class.js';
// import {TodoList} from './classes/todo-list.class.js';

export const todoList = new TodoList();


// const tarea = new Todo('Aprender JavaScript!!');


// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);

// Local Storage - Sesion Storage

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key', 'ABC123');


//console.log(todoList.todos);;
todoList.todos.forEach(todo => crearTodoHtml(todo) );
































































































































































































































































































































































































