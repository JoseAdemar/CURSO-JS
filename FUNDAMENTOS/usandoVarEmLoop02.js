
const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[7]()

// Erro do javascript nesse exemplo , ele não respeita o i e vai trazer o valor 10 nas duas chamadas do metdo.

console.log('----------------------------------------------------------')

//Veja a diferença usando let , com o let ele resolve esse erro
const funcs01 = []

for (let i = 0; i < 10; i++) {
    funcs01.push(function () {
        console.log(i)
    })
}

funcs01[2]()
funcs01[7]()
