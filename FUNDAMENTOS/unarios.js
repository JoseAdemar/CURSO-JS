let num1 = 1
let num2 = 2

num1 ++
console.log(num1)

--num1
console.log(num1)

// É verdadeiro porque a comparação foi feita antes do incremento e decremento
console.log(++num1 === num2--)  
console.log(num1 === num2)