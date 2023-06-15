function getInteiroAleatorioEntre(min, max){
    if(min > max){ 
        [min, max] = [max, min]
    }
    const valor = Math.random() *(max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(10,-1)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a proxima!')