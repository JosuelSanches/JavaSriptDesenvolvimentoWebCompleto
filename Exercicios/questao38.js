/* Escreva uma função que receba dois parâmetros início e fim.
 Essa função deve imprimir todos os números ímpares que estão entre esses valores.
 Por padrão os valores devem ser 0 para início e 100 para fim. 
 Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

 let impareEntre = (a = 0, b = 100)=>{
    if(a > b){
        let c = a
        a = b
        b = c
        console.log(a, b)
    }
    for(a; a < b; a++){
        if(a%2 != 0){
            console.log(a)
        }
    }
 }

 impareEntre(8, 100)