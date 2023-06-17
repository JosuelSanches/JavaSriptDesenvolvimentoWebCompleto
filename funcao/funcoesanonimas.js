const soma = function(x,y){
    return x+y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))
}
imprimirResultado(3,4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x,y){return x- y})
imprimirResultado(3 ,4, (x,y)=> x * y)
imprimirResultado(10 ,2 , function(x,y){return x * y})

const pessoa ={
    nome: 'josuel',
    falar: function(){
        console.log(`Isso é o que o ${this.nome} diria...`)
        console.log('não sei o que dizer...')
    }
}

pessoa.falar()