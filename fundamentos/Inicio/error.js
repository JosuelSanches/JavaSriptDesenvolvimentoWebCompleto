function tratarErrorELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    throw{
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNomeNoBerro(){
    try{
        console.log(obj.name.toUpperCase() +' '+ obj.sobrenome.toUpperCase() + '!!!')
    } catch(e){
        tratarErrorELancar(e)
    } finally{
        console.log('Final')
    }
}

const obj = {
    name: 'Josuel',
    sobrenome: "Sanches"
}
imprimirNomeNoBerro(obj)