let marca = "Ford";
let velocidad = 300;
let stock = true;
let modelos = ["Mondeo", "Focus", "Tiwan"];

// Crear la frase con interpolación de variables
let frase = `Tenemos coches de la marca ${marca} que tienen una velocidad de ${velocidad} km/h. 
Tenemos todos estos modelos en stock: ${stock ? 'sí' : 'no'}.`;

// Añadir los modelos al final de la frase
frase += "\nModelos disponibles:\n";
modelos.forEach((modelo) => {
    frase += `- ${modelo}\n`;
});

// Mostrar la frase en la consola
console.log(frase);

// Mostrar la frase en la página HTML
document.getElementById("caja").innerText = frase;
