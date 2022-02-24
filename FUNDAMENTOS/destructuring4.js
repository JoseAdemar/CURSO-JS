function aleatorio([minimo=0, maximo=1000]){
    if(minimo > maximo) [minimo,maximo] = [maximo,minimo] // alterando a ordem do array
    const valor = Math.random() * (maximo - minimo) + minimo
    return Math.floor(valor)
}

console.log(aleatorio([50, 40]))
console.log(aleatorio([ , 10]))
console.log(aleatorio([]))


