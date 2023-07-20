function gerarNumerosEntre(min,max){
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve=>{
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator)+ min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(10, 90)
    .then(num => num +2)
    .then(num => Math.floor((num * 3) /4))
    .then(console.log)