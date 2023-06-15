const imprimirResultado = function(nota){
    if(nota <= 10 || nota >= 0){
        if(nota >= 7){
            console.log('Com '+nota+', foi Aprovado!')
        }else{
            console.log('Com '+nota+', foi Reprovado!')
        }
    }
}

imprimirResultado(9)
imprimirResultado(6)
imprimirResultado(`epa!`) // cuidado!!