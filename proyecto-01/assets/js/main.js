let nombre = "Antonio";
let edad = 30
let pais = "España"
let conocimientos = ["Ingles", "Frances", "Italiano"]


/* Forma 1 */
console.log("Hola soy" + nombre + " y tengo" + edad + "años." + "Vivo en" + pais + " Y practico bastante" + conocimientos);

/* Forma 2*/
console.log(`Hola soy ${nombre}, tengo ${edad} años y vivo en ${pais}`)


edad = 90;
conocimientos.push("Chino")

console.log("Ahora tengo" + edad + "años"+ "y estoy aprendiendo" + conocimientos)