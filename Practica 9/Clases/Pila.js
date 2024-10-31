import ListaSimpleEnlazada from "./Lista.js";

class Pila {
    constructor() {
        this.lista = new ListaSimpleEnlazada();
    }

    // agregar un elemento
    push(valor) {
        this.lista.agregar(valor);
    }

    // eliminar el último elemento de la pila
    pop() {
        return this.lista.eliminar();
    }

    // Ver el elemento superior de la pila
    peek() {
        return this.lista.verUltimo();
    }

    // Verificar si la pila está vacía
    isEmpty() {
        return this.lista.estaVacia();
    }

    // Método para reemplazar un valor en la pila
    reemplazar(viejo, nuevo) {
        const auxPila = new Pila();
        let encontrado = false; // Bandera para identificar si el valor ha sido reemplazado

        // Extraer los valores y buscar el último que será reemplazado
        while (!this.isEmpty()) {
            let valorActual = this.pop();
            if (valorActual === viejo && !encontrado) {
                auxPila.push(nuevo); 
                encontrado = true;
            } else {
                auxPila.push(valorActual);
            }
        }

        // Restaurar los valores en la pila original
        while (!auxPila.isEmpty()) {
            this.push(auxPila.pop());
        }
    }
}

export default Pila;
