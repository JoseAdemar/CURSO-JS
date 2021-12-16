// Armazenando funcao dentro de uma variavel

const imprimirSoma = function(a,b){
    console.log(a + b)
}

imprimirSoma(2,3)
//--------------------------------------------

// Armazenando uma funcao arrow dentro de uma variavel

const soma = (a,b) => {
    return a + b
}

console.log(soma(3,3))
//--------------------------------------------------------

// Retorno implicito

const subtracao = (a,b) => a - b
console.log(subtracao(6,2))

//-----------------------------------------------------------

const impprimir2 = a => console.log(a)
impprimir2('Que legal !!')