
export class Todo {


    constructor(tarea) {
        this.tarea = tarea;
        //gettime representa hora minuto segundo etc
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}