function teste1(num){
    if(num > 7)
    console.log(num)
    console.log('Final')
}

teste1(6)
teste1(8)

console.log('#####################')


// Cuidado com ponto e vírgula dentro de if
function teste2(num){
    if(num > 7);{
    console.log(num)
   }
}

teste2(6)
teste2(8)

