function soBoaNoticias(nota){
    if(nota >= 7){
        console.log('Parabéns, voçê foi aprovado com ' + nota)
    }
}
soBoaNoticias(9)
soBoaNoticias(6.9)

function seForVerdadeEuFalo(valor){
    if(valor){// automaticamente entede-se que há um boolean aqui
        console.log('É verdade ...' + valor)
    }
}
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})