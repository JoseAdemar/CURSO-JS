
/* No javascript uma variavel global var pode ser chamada antes da declaração 
sem gerar erro  dando apenas undefined*/
console.log('a = ', a)
var a = 2
console.log('a =', a)

/* Já com o let não acontece isso, vai gerar erro */

console.log('b = ', b)
let a = 2
console.log('b =', b)

