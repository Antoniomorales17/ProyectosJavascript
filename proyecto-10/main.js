let text = prompt("Introduce su palabra");

function countAndUpperLetters(word){
    let upper = word.toUpperCase();
    let count = word.length;

    return "la palabra ha sido" + upper + " y tiene" + count + " letras"
}

alert( countAndUpperLetters(text));