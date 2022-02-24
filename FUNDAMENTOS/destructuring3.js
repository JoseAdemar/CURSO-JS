// Gerando valores aleatórios

function aleatorio({minimo=0, maximo=1000}){
    const valor = Math.random() * (maximo - minimo) + minimo
    return Math.floor(valor)
}

const obj = {maximo: 50, minimo: 40}
console.log(aleatorio(obj))
console.log(aleatorio({})) 
// Passando o objeto vazio ele vai ficar gerando o número aleatório entre 0 e 1000