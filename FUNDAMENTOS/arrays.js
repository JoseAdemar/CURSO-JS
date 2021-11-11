const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0],  valores[3])
console.log(valores[4]) // aceita posições no array que não foi definida porém vai ficar como undefined

valores[4] = 10 //setando uma nova posição no array
console.log(valores)
console.log(valores.length) //vendo o tamanho do array

valores.push({id: 3}, false, null, 'teste') // o array é heterogenio aceitas varios tipos de dados
                                            // push é utilizado para inserir dados dentro do array
console.log(valores)

console.log(valores.pop()) //utilizando o metodo pop ele remove o ultimo elemento do array
delete valores[0] // remove o elemento na posição 0 do array
console.log(valores)

console.log(typeof valores)

