/* 

Uma variavel do tipo var é enxergada em todo o codigo
como uma variavel global, porem se ela estiver dentro
de um bloco de codigo {} que seja uma funcao ela vai ser exergada apenas
dentro do bloc de codigo.

*/

// Nesse exemplo o resultado vai ser 2 duas vezes porque a variavel numero vai ser sobscrita
// porque a variavel var dentro do bloco nao está no bloco de uma funcao.
var numero = 1

{
    var numero = 2
    console.log(numero)
}

console.log(numero)