class Pila {
    constructor() {
        this.elementos = [];
    }

    // Método para añadir elementos a la pila
    push(elemento) {
        this.elementos.push(elemento);
    }

    // Método para eliminar y devolver el último elemento
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.elementos.pop();
    }

    // Método para ver si la pila está vacía
    isEmpty() {
        return this.elementos.length === 0;
    }

    // Método para obtener el tamaño de la pila
    size() {
        return this.elementos.length;
    }
}

export default Pila;
