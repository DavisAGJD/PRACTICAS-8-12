import Pila from "./Pila.js";

class Sumador {
    constructor() {
        this.pilaResultado = new Pila();
    }

    // Método para sumar dos pilas
    sumar(pila1, pila2) {
        let acarreo = 0;

        while (!pila1.isEmpty() || !pila2.isEmpty() || acarreo > 0) {
            const digito1 = !pila1.isEmpty() ? pila1.pop() : 0;
            const digito2 = !pila2.isEmpty() ? pila2.pop() : 0;

            let suma = digito1 + digito2 + acarreo;
            acarreo = Math.floor(suma / 10); // Obtener el acarreo
            this.pilaResultado.push(suma % 10); // Empujar el dígito
        }
    }

    // Método para obtener el resultado en forma de string
    obtenerResultado() {
        let resultado = '';
        while (!this.pilaResultado.isEmpty()) {
            resultado += this.pilaResultado.pop();
        }
        return resultado;
    }
}

export default Sumador;
