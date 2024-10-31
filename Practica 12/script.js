import Estacionamiento from './Clases/estacionamiento.js';

const estacionamiento = new Estacionamiento();

// Evento para ingresar un auto
document.getElementById('entradaAutoBtn').addEventListener('click', () => {
    const placas = document.getElementById('placas').value;
    const propietario = document.getElementById('propietario').value;

    if (placas && propietario) {
        estacionamiento.entradaAuto(placas, propietario);
        actualizarTabla();
    } else {
        alert('Por favor, ingrese las placas y el nombre del propietario.');
    }
});

// Evento para atender un auto (salida)
document.getElementById('salidaAutoBtn').addEventListener('click', () => {
    estacionamiento.salidaAuto();
    actualizarTabla();
});

// Función para actualizar la tabla en pantalla
function actualizarTabla() {
    const tabla = document.getElementById('tablaEstacionamiento');
    tabla.innerHTML = ''; // Limpiar la tabla

    // Recorre los autos y los muestra (para visualizar la cola)
    let nodoActual = estacionamiento.cola.lista.cabeza;
    if (nodoActual) {
        do {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${nodoActual.placas}</td>
                <td>${nodoActual.propietario}</td>
                <td>${new Date(nodoActual.horaEntrada).toLocaleTimeString()}</td>
            `;
            tabla.appendChild(fila);
            nodoActual = nodoActual.siguiente;
        } while (nodoActual !== estacionamiento.cola.lista.cabeza); // Ciclo hasta que regrese al inicio
    }
}
