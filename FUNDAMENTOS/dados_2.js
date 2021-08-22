console.log(19.9 * 0.9);  //Valores das variaveis sem identificadores não é uma boa prática

//Um melhor exemplo:
let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1- desconto);
console.log(precoComDesconto);

//Outro exemplo:
let nome = "Caderno"; // String (texto) -> uma sequência de símbolos
let categoria = "Papelaria";

//Imprimindo varios valores concatenados
console.log("Produto: " + nome
                        + " Categoria: " + categoria
                        + " Preço: " + preco
                        + " Desconto: " + desconto)