
import {countPendientes} from '../js/componente'
export class TodoList {

    constructor(){
        // this.todos = [];
        this.cargarLocalStorage();
        this.contarPendientes();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
        this.contarPendientes();
    }

    eliminarTodo(id){
        // UNA FORMA DE HACERLO
        // for (const todo of this.todos) {
        //     // console.log(todo);
        //     // console.log(id, todo.id);
        //     if (todo.id == id){
        //         const elemento = this.todos.indexOf(todo);
        //         this.todos.splice(elemento,1);
                
        //     }
        // } 

        // otra forma de hacerlo
        // regresa un nuevo arreglo excluyendo el que coincida
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
        this.contarPendientes();
    }

    marcarCompletado(id){
        
        // for (let i= 0; i < this.todos.length; i++){
        //     console.log(id, this.todos[i].id);
        //     if (this.todos[i].id == id){
        //         this.todos[i].completado = !this.todos[i].completado;
        //         break;
        //     }
        // }

        for (const todo of this.todos) {
            console.log(todo);
            console.log(id, todo.id);
            if (todo.id == id){
                todo.completado = !todo.completado;
                this.contarPendientes();
                break;
            }
        }
        this.guardarLocalStorage();
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    contarPendientes(){
        let pendientes = 0;
        let count = countPendientes.firstElementChild;
        for (let todo of this.todos) {
            (!todo.completado === true) ? pendientes++ : null;
             
        }
        count.innerHTML = pendientes;
    }
    guardarLocalStorage(){

        localStorage.setItem('todo',JSON.stringify(this.todos));

    }

    cargarLocalStorage(){
        // if (localStorage.getItem('todo')){

        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log('cargar local : ', this.todos);
        // } else {
        //     this.todos = [];
        // }

        // con operador ternario
        this.todos = (
            localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [];

    }
    
}