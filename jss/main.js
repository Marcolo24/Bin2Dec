function elpepe() {
    var binario = document.getElementById('binario').value
    var digit = parseInt(binario, 2);
    var resultado = document.getElementById('resultado')
    var hola = binario.charAt(binario.length - 1)
    var resultados = document.getElementById('resultados')
    var decimal = document.getElementById('decimal')
    decimal.innerHTML = digit
    if (hola == 0 || hola == 1) {
        resultado.innerHTML = "Es binario"
        resultados.innerHTML = ""
    } else {
        resultados.innerHTML = "No es binario"
        resultado.innerHTML = ""

    }
}