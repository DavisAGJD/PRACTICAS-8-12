import Nodo from './Nodo.js';

export default class ListaCircularDoble {
    constructor() {
        this.cabeza = null;
        this.tamaño = 0;
    }

    // Insertar un nodo en la cola circular
    insertar(placas, propietario, horaEntrada) {
        const nuevoNodo = new Nodo(placas, propietario, horaEntrada);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
            nuevoNodo.siguiente = nuevoNodo;
            nuevoNodo.anterior = nuevoNodo;
        } else {
            const ultimo = this.cabeza.anterior;
            nuevoNodo.siguiente = this.cabeza;
            nuevoNodo.anterior = ultimo;
            ultimo.siguiente = nuevoNodo;
            this.cabeza.anterior = nuevoNodo;
        }
        this.tamaño++;
    }

    // Eliminar el nodo desde la cabeza (simular salida de auto)
    eliminar() {
        if (!this.cabeza) return null;

        const eliminado = this.cabeza;

        if (this.cabeza.siguiente === this.cabeza) {
            this.cabeza = null;
        } else {
            const ultimo = this.cabeza.anterior;
            this.cabeza = this.cabeza.siguiente;
            this.cabeza.anterior = ultimo;
            ultimo.siguiente = this.cabeza;
        }

        this.tamaño--;
        return eliminado;
    }

    // Ver si la lista está vacía
    estaVacia() {
        return this.tamaño === 0;
    }
}
