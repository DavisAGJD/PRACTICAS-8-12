import Pila from "./Clases/Pila.js";
import Sumador from "./Clases/Sumador.js";

// Evento al hacer clic en el botón de sumar
document.getElementById('sumarBtn').addEventListener('click', () => {
    const num1 = document.getElementById('num1').value.trim();
    const num2 = document.getElementById('num2').value.trim();

    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        alert("Por favor ingresa números válidos.");
        return;
    }

    const pila1 = new Pila();
    const pila2 = new Pila();
    const sumador = new Sumador();

    // Insertar los dígitos de los números en las pilas
    for (let i = 0; i < num1.length; i++) pila1.push(parseInt(num1[i]));
    for (let i = 0; i < num2.length; i++) pila2.push(parseInt(num2[i]));

    // Realizar la suma
    sumador.sumar(pila1, pila2);

    // Mostrar el resultado
    document.getElementById('resultadoSuma').textContent = sumador.obtenerResultado();
});
