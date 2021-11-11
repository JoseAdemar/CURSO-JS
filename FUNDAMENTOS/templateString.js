const nome = 'Rebeca'

const concatenacao = 'Olá ' + nome + '!!'
console.log(concatenacao)

const templateStringExemplo = `
                        Olá
                        meu nome é ${nome} !! `
                        console.log(templateStringExemplo)

//Expressões

console.log(`1+1 = ${1 + 1}`)

const transformaTextoEmCaixaAlta = texto => texto.toUpperCase()
console.log(`Ei....${transformaTextoEmCaixaAlta('cuidado !!')}`)