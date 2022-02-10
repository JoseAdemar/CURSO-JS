// novo recurso do ES2015

// Criado o objeto pessoa
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Extraindo dados do objeto pessoa com destructuring
const {nome, idade} = pessoa
console.log(nome, idade)

// Criado o objeto pessoa2
const pessoa2 = {}
pessoa2.nome = 'Pedro'
pessoa2.idade = 10
pessoa2.logradouro = 'Rua Pinheiros'
pessoa2.numero = 2000

// Extraindo dados do objeto pessoa com destructuring e criando uma apelido para as variaveis
const {nome: n, idade: i} = pessoa2
console.log(n, i)


