/* 

Uma variavel do tipo var é enxergada em todo o codigo
como uma variavel global, porem se ela estiver dentro
de um bloco de codigo {} que seja uma funcao ela vai ser exergada apenas
dentro do bloc de codigo.

*/


// codigo abaixo nao é uma funcao
{
    {
        {
            {
                { var sera = 'Será????' }
            }
        }
    }
}

console.log(sera)

// -------------------------------------------------------------------------

// Nesse codigo abaixo vai da erro porque a variavel local é enxergada apenas dentro da funcao
function teste(){

    var local = 'Teste'
}

console.log(local)