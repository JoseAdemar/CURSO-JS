/* let tem escopo global, escopo de funcao e escopo de bloco 
 *  let se tiver dentro de um bloco de codigo ele só é reconhecido dentro
 *  do bloco de codigo independente se é só um bloco de codigo ou funcao */

let numero = 1

{
    let numero = 2
    console.log('Dentro', numero)
}

console.log('Fora', numero)