export default class Nodo {
    constructor(placas, propietario, horaEntrada) {
        this.placas = placas;
        this.propietario = propietario;
        this.horaEntrada = horaEntrada;
        this.siguiente = null;
        this.anterior = null;
    }
};