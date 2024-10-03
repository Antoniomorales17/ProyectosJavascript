// Función para sumar una cantidad indefinida de números
function sumarNumeros(...numeros) {
    // Sumar todos los números recibidos
    let suma = numeros.reduce((total, num) => total + num, 0);
  
    // Mostrar el resultado en un encabezado de segundo nivel
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = "<h2>La suma es: " + suma + "</h2>";
  
    // Mostrar los números utilizados en un párrafo
    let numerosHTML = document.getElementById("numeros");
    numerosHTML.innerHTML = "<p>Números utilizados: " + numeros.join(", ") + "</p>";
  }
  
  // Llamada a la función con ejemplos
  sumarNumeros(10, 20, 30, 40); 
  