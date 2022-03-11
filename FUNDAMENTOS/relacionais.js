// Operadores relacionais um simbolo de = é um operador de atribuição
// um simbolo com dois == faz comparacao  sem olhar o tipo
// um simbolo com === compara se realmente é igual em todos os sentidos
// um simbolo com != verifica se é diferente sem olhar o tipo
// um simbolo com !== verifica se realmente é diferente incluindo o tipo

console.log('01', '1' == 1)
console.log('02', '1' === 1)
console.log('03', '3' != 3)
console.log('04', '4' !== 3)

console.log('05', 3 < 2)
console.log('06', 3 > 2)
console.log('07', 3 <= 2)
console.log('08', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09', d1 === d2)
console.log('10', d1 == d2)
console.log('11', d1.getTime === d2.getTime)





