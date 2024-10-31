import ListaCircularDoble from './Lista.js';

export default class ColaCircularDoble {
    constructor() {
        this.lista = new ListaCircularDoble();
    }

    // Insertar auto en la cola
    insertarAuto(placas, propietario, horaEntrada) {
        this.lista.insertar(placas, propietario, horaEntrada);
    }

    // Atender el auto (sacar de la cola)
    atenderAuto() {
        return this.lista.eliminar();
    }

    // Ver si la cola está vacía
    estaVacia() {
        return this.lista.estaVacia();
    }
}
