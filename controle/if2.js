function teste1(num){
    if(num > 7){
        console.log(num)// caso não seja colocado chave, só esta linha estará associada com o if
        console.log('Final')

    }
}
teste1(6)
teste1(8)

function teste2(num){
    if(num > 7)/*;//Cuidado com o ponto e virgula, não as use com as estruturas de controle*/{
        console.log(num)
    }
}

teste2(6)
teste2(8)