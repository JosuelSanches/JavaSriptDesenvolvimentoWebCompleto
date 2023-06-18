const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, i){
    console.log(`${i + 1} : ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))