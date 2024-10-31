// Clase Cola
class Cola {
    constructor() {
        this.clientes = [];
    }

    // Método para agregar un cliente a la cola
    agregarCliente(cliente) {
        this.clientes.push(cliente);
    }

    // Método para atender al cliente en el frente de la cola
    atenderCliente() {
        return this.clientes.shift();
    }

    // Método para verificar si la cola está vacía
    colaVacia() {
        return this.clientes.length === 0;
    }

    // Método para verificar si la cola está llena
    colaLlena() {
        return this.clientes.length >= 10; // Limite arbitrario para evitar desbordamiento
    }
}

export default Cola;