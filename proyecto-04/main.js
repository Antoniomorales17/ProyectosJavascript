let sueldoBase= parseInt( prompt("¿Cuanto cobras?", 0))
let resultado = document.getElementById("resultado");

switch(sueldoBase){
    case 500:
        resultado.innerHTML = "Trabajas a media jornada";
        break;

        case 1000:
        resultado.innerHTML = "Tienes el suedo minimo";
        break;

        case 1500:
        resultado.innerHTML = "Eres casi funcionario";
        break;

        case 2000:
        resultado.innerHTML = "Tienes un sueldo maravilloso";
        break;

        default:
        resultado.innerHTML = "No trabajas NINI";
        break;
}