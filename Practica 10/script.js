import Cola from "./Clases/Cola.js";
import Cliente from "./Clases/Cliente.js";

const cola = new Cola();
let turnoActual = 1; // Turno inicial en 1

// Función para actualizar la tabla de la cola en el HTML
function actualizarTabla() {
    const tablaElement = document.getElementById("tablaClientes");
    tablaElement.innerHTML = ''; // Limpiar la tabla

    cola.clientes.forEach(cliente => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${cliente.turno}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.tipoMovimiento}</td>
            <td>${cliente.fechaLlegada} ${cliente.horaLlegada}</td>
        `;
        tablaElement.appendChild(fila);
    });
}

// Evento para agregar cliente a la cola
document.getElementById("agregarClienteBtn").addEventListener("click", () => {
    const nombre = document.getElementById("nombreCliente").value;
    const tipoMovimiento = document.getElementById("tipoMovimiento").value;

    if (!nombre || !tipoMovimiento) {
        alert("Por favor, complete todos los campos.");
        return;
    }
    if (cola.colaLlena()) {
        alert("La cola está llena. No se pueden agregar más clientes.");
        return;
    }

    // Obtener la fecha y hora actual
    const fechaActual = new Date();

    // Formatear la fecha como day/month/year
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES');

    // Formatear la hora como HH:MM:SS
    const horaFormateada = fechaActual.toLocaleTimeString('es-ES');

    // Crear un nuevo cliente con la fecha y hora de llegada
    const nuevoCliente = {
        turno: turnoActual, // Asignar el turno actual automáticamente
        nombre: nombre,
        tipoMovimiento: tipoMovimiento,
        horaLlegada: horaFormateada, // Guardar solo la hora para el cálculo posterior
        fechaLlegada: fechaFormateada // Guardar la fecha formateada
    };

    cola.agregarCliente(nuevoCliente);
    alert(`Cliente formado en la Cola:
           No Turno: ${nuevoCliente.turno}
           Nombre: ${nuevoCliente.nombre}
           Tipo de Movimiento: ${nuevoCliente.tipoMovimiento}
           Fecha de llegada: ${nuevoCliente.fechaLlegada}
           Hora de llegada: ${nuevoCliente.horaLlegada}`);

    turnoActual++; // Incrementar el turno para el siguiente cliente
    actualizarTabla();
});

// Evento para atender cliente en ventanilla
document.getElementById("atenderClienteBtn").addEventListener("click", () => {
    if (cola.colaVacia()) {
        alert("No hay clientes en la cola para atender.");
        return;
    }

    const clienteAtendido = cola.atenderCliente();

    // Obtener la hora actual y convertirla a un formato de tiempo.
    const horaActual = new Date();

    // La hora de llegada se almacenó como un string (formato "HH:MM:SS"). Convertirla en un objeto Date.
    const partesHoraLlegada = clienteAtendido.horaLlegada.split(":");
    const horaLlegada = new Date();
    horaLlegada.setHours(parseInt(partesHoraLlegada[0]));
    horaLlegada.setMinutes(parseInt(partesHoraLlegada[1]));
    horaLlegada.setSeconds(parseInt(partesHoraLlegada[2]));

    // Calcular la diferencia en segundos entre la hora actual y la hora de llegada.
    const tiempoEspera = Math.floor((horaActual - horaLlegada) / 1000); // Diferencia en milisegundos a segundos

    alert(`Cliente atendido: ${clienteAtendido.nombre}
           Tiempo de espera en la cola: ${tiempoEspera} segundos`);

    actualizarTabla();
});
