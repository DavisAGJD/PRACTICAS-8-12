import Nodo from "./Nodo.js";

class ListaSimpleEnlazada {
    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.longitud = 0;
    }

    agregar(coche) {
        const nuevoNodo = new Nodo(coche);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            this.cola.siguiente = nuevoNodo;
            this.cola = nuevoNodo;
        }
        this.longitud++;
    }

    eliminar() {
        if (!this.cabeza) return null;
        const coche = this.cabeza.dato;
        this.cabeza = this.cabeza.siguiente;
        this.longitud--;
        return coche;
    }

    verFrente() {
        return this.cabeza ? this.cabeza.dato : null;
    }

    tamaño() {
        return this.longitud;
    }

    estaVacia() {
        return this.longitud === 0;
    }
}

export default ListaSimpleEnlazada;
