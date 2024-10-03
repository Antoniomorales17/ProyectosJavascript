const actualYear = new Date().getFullYear();
let year;
let resultado = 0;

do {
  year = parseInt(prompt("¿En qué año naciste?", 1992));
  // Comprobamos si el año ingresado es un número y está dentro de un rango lógico
} while (isNaN(year) || year > actualYear || year < (actualYear - 120)); 

resultado = actualYear - year;

alert("Tienes " + resultado + " años.");
