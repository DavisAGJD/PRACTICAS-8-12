import Pila from "./Clases/Pila.js";

const pila = new Pila();

document.getElementById("addValueBtn").addEventListener("click", () => {
    const valor = parseInt(document.getElementById("valueInput").value);
    if (!isNaN(valor)) {
        pila.push(valor);
        actualizarPila();
    } else {
        alert("Ingrese un valor numérico válido.");
    }
});

document.getElementById("replaceValueBtn").addEventListener("click", () => {
    const viejo = parseInt(document.getElementById("oldValueInput").value);
    const nuevo = parseInt(document.getElementById("newValueInput").value);
    
    if (!isNaN(viejo) && !isNaN(nuevo)) {
        pila.reemplazar(viejo, nuevo);
        actualizarPila();
    } else {
        alert("Ingrese valores numéricos válidos.");
    }
});

function actualizarPila() {
    const pilaElement = document.getElementById("pila");
    pilaElement.innerHTML = ''; // Limpiar pila anterior

    const auxPila = new Pila();

    while (!pila.isEmpty()) {
        const valor = pila.pop();
        const li = document.createElement("li");
        li.textContent = valor;
        pilaElement.appendChild(li);
        auxPila.push(valor);
    }

    // Restaurar los valores a la pila original
    while (!auxPila.isEmpty()) {
        pila.push(auxPila.pop());
    }
}
