const imprimirNome = function(nome){
    switch (nome.toUpperCase()){
        case 'JOSUEL':
            console.log("O que desejas meu rei, " +nome+'.')
            break
        case 'HENRIQUE':
            console.log('Sulista não tem vez, '+nome+'.')
            break
        case 'TARCILENO':
            console.log(nome+', pague o aluguel.')
            break
        case 'FROG MAN':
            console.log('O que tu quer ta mole, '+nome+'.')
            break
        default:
            console.log('Eu nem sei quem vc é.')
    }
}
imprimirNome('henrique')
imprimirNome('tarcileno')
imprimirNome('josuel')
imprimirNome('frog man')
imprimirNome('julio')
