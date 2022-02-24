// Exemplos apenas para entender as possibilidades utilizando destructuring
// Em um projeto real não faz sentido a utilização devido não ser de fácil leitura.

const[a] = [10]
console.log(a)

// passando valores em branco no array e depois recuperando os valores passados.
const[n1, ,n3, ,n5, n6=0] = [10,7,9,8]
console.log(n1,n3,n5,n6)