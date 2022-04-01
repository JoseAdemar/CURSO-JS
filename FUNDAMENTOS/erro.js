function tratarErroELancar(erro){
   throw new Error('Nome da variavel nome não definida')
}


function imprimirNomeGritado(){
    try {

        console.log(obj.name.toUpperCase() + '!!!!')

    } catch (e) {
        tratarErroELancar(e)
    }finally{
        // Observações: Ao utilizar finally mesmo que dê erro ele vai executar o bloco finally
        console.log("Final")
    }
    
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)