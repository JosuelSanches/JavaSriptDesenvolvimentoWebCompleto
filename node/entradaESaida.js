const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)
if (anonimo){
    process.stdout.write('Fala de anonimo: \n')
    process.exit()
}else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data =>{
        let nome = data.toString()
        //nome = nome.slice(0,-1)
        nome = nome.slice(0,-1)

        process.stdout.write("Fala") 

        process.stdout.write(nome)

        //process.stdout.write("!!")
        process.stdout.write("!!")
        //process.stdout.write(`Fala ${nome}!!`)
        //console.log(`Fala ${noem}!`)
        process.exit()
    })
}