// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma('Resultado' + " ", 10, 10)


// Funcao com retorno
function soma(a, b=12){
    return a + b
}

console.log('Resultado', soma(10))