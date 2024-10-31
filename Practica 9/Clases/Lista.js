import Nodo from "./Nodo.js";

class ListaSimpleEnlazada {
    constructor() {
        this.cabeza = null;
    }

    // Añadir un valor a la lista
    agregar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }

    // Eliminar el último valor 
    eliminar() {
        if (!this.cabeza) return null;

        if (!this.cabeza.siguiente) {
            const valor = this.cabeza.valor;
            this.cabeza = null;
            return valor;
        }

        let actual = this.cabeza;
        while (actual.siguiente.siguiente) {
            actual = actual.siguiente;
        }

        const valor = actual.siguiente.valor;
        actual.siguiente = null;
        return valor;
    }

    // Ver el último valor sin eliminarlo
    verUltimo() {
        if (!this.cabeza) return null;
        let actual = this.cabeza;
        while (actual.siguiente) {
            actual = actual.siguiente;
        }
        return actual.valor;
    }

    // Revisar si la lista está vacía
    estaVacia() {
        return this.cabeza === null;
    }
}

export default ListaSimpleEnlazada;
