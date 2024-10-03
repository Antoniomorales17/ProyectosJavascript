// Función que verifica si el número es par o impar
function verificarParidad() {
    // Pedir al usuario que introduzca un número
    let numero = parseInt(prompt("Introduce un número:"));
  
    // Obtener el elemento con id 'result'
    let resultadoHTML = document.getElementById("result");
  
    // Verificar si el valor ingresado es un número válido
    if (isNaN(numero)) {
      alert("No es un número válido");
      console.log("No es un número válido");
      resultadoHTML.textContent = "No es un número válido.";
    } else {
      // Comprobar si el número es par o impar
      let resultado = (numero % 2 === 0) ? "par" : "impar";
  
      // Mostrar el resultado en la consola
      console.log("El número " + numero + " es " + resultado);
  
      // Mostrar el resultado en el HTML
      resultadoHTML.textContent = "El número " + numero + " es " + resultado;
  
      // Mostrar el resultado en una ventana emergente
      alert("El número " + numero + " es " + resultado);
    }
  }
  
  // Llamar a la función al cargar la página
  verificarParidad();
  