function multiplicarPorDois(array, callback) {
    var resultado = [];
    for (var i = 0; i < array.length; i++) {
        resultado.push(callback(array[i]));
    }
    return resultado;
}

function multiplicar(numero) {
    return numero * 2;
}

function exibirResultado(resultado) {
    document.getElementById("output").innerText = "Novo array: " + resultado.join(", ");
}

var numeros = [1, 2, 3, 4, 5];
var novoArray = multiplicarPorDois(numeros, multiplicar);
exibirResultado(novoArray);
