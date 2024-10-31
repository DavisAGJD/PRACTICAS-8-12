import ColaCircularDoble from './ColaCircularDoble.js';

export default class Estacionamiento {
    constructor() {
        this.cola = new ColaCircularDoble();
    }

    // Entrada del auto
    entradaAuto(placas, propietario) {
        const horaEntrada = new Date();
        this.cola.insertarAuto(placas, propietario, horaEntrada);
        alert(`Entrada confirmada para el auto con placas ${placas}, propietario: ${propietario}.`);
    }

    // Salida del auto
    salidaAuto() {
        if (this.cola.estaVacia()) {
            alert("El estacionamiento está vacío.");
            return;
        }

        const auto = this.cola.atenderAuto();
        const horaSalida = new Date();
        const tiempoEstacionado = Math.floor((horaSalida - new Date(auto.horaEntrada)) / 1000); // En segundos
        const costo = tiempoEstacionado * 2; // $2 por segundo

        alert(`Auto atendido: 
               Placas: ${auto.placas}, 
               Propietario: ${auto.propietario}, 
               Tiempo: ${tiempoEstacionado} segundos, 
               Costo: $${costo}`);
    }
}
