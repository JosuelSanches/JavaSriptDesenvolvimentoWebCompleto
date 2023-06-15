function getInteiroAleatorioEntre(min, max){
    if(min > max){ 
        [min, max] = [max, min]
    }
    const valor = Math.random() *(max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(10,-1)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a proxima!')