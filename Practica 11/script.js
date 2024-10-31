import Cola from "./Clases/Cola.js";

const colaCoches = new Cola();
let cochesPintados = 0;
const coloresDisponibles = ["rojo", "verde", "naranja", "amarillo"];
let tiempoInicio = Date.now();
let encolarInterval = 5000; // Iniciar con 20 segundos para encolar

// Función para generar un color aleatorio para un coche
function generarColorAleatorio() {
  const indiceAleatorio = Math.floor(Math.random() * coloresDisponibles.length);
  return coloresDisponibles[indiceAleatorio];
}

// Función para encolar un coche cada X segundos, con velocidad ajustable
function encolarCoche() {
  if (colaCoches.size() >= 5) {
    finalizarJuego(); // Terminar el juego si hay 5 coches
    return;
  }

  const coche = {
    color: generarColorAleatorio(),
    pintado: false,
  };
  colaCoches.enqueue(coche);
  mostrarCoches();
}

// Función para mostrar los coches en la pantalla solo cuando se enfilen
function mostrarCoches() {
  const carros = document.querySelectorAll(".carro");
  const etiquetas = document.querySelectorAll(".etiqueta");

  carros.forEach((carro, index) => {
    if (index < colaCoches.size()) {
      carro.style.display = "block"; // Mostrar solo coches en la cola
      const coche = colaCoches.coches[index];
      etiquetas[index].textContent = coche.color.toUpperCase();
      carro.src = "carro.png"; // Mostrar el coche en blanco hasta ser pintado
    } else {
      carro.style.display = "none"; // Ocultar coches que aún no llegan
    }
  });
}

let isProcessing = false;

// Función para pintar el primer coche
window.pintarCarro = function (colorSeleccionado) {
  if (isProcessing) {
    return; // Si ya se está procesando un coche, no permite pintar otro
  }

  const cocheFrente = colaCoches.peek(); // Ver el primer coche en la cola

  if (!cocheFrente) {
    alert("No hay coches en fila.");
    return;
  }

  if (cocheFrente.color === colorSeleccionado) {
    isProcessing = true; // Indica que se está procesando la pintura de un coche
    cochesPintados++;
    document.getElementById("carrosPintados").textContent = cochesPintados;

    // Pintar el coche del color seleccionado
    const carroElement = document.querySelector(".carro");
    carroElement.src = `carro_${colorSeleccionado}.png`; // Actualizar la imagen del coche pintado

    // Cambiar el texto a "ATENDIDO"
    const etiquetaFrente = document.querySelector(".etiqueta");
    etiquetaFrente.textContent = "ATENDIDO";

    // Esperar 2 segundos antes de quitar el coche de la cola
    setTimeout(() => {
      colaCoches.dequeue(); // Eliminar el coche de la cola
      mostrarCoches(); // Mostrar los siguientes coches en la fila
      isProcessing = false; // Habilita la pintura del siguiente coche

      // Aumentar la velocidad de encolado cada 3 coches pintados
      if (cochesPintados % 3 === 0) {
        aumentarVelocidad();
      }
    }, 2000); // 2000 milisegundos = 2 segundos
  } else {
    alert("Selecciona el color correcto.");
  }
};

// Aumentar la velocidad cada 3 coches pintados
function aumentarVelocidad() {
  encolarInterval = Math.max(encolarInterval - 3000, 5000); // Aumenta la velocidad, mínimo 5 segundos
  clearInterval(encolarTimeout);
  encolarTimeout = setInterval(encolarCoche, encolarInterval); // Reiniciar el intervalo con el nuevo tiempo
}

// Terminar el juego cuando haya 5 coches en fila
function finalizarJuego() {
  const tiempoFinal = Math.floor((Date.now() - tiempoInicio) / 1000); // Tiempo total jugado en segundos
  alert(`El juego ha terminado. Has pintado ${cochesPintados} coches en ${tiempoFinal} segundos.`);
  clearInterval(encolarTimeout); // Detener el encolado de nuevos coches
  location.reload();
}

let encolarTimeout = setInterval(encolarCoche, encolarInterval); // Comenzar encolado automático

// Inicializar el juego mostrando los coches
mostrarCoches();
