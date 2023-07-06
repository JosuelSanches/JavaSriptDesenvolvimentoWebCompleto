/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

let notas=[10, 8, 8.9, 6, 3, 9, 7, 18, -2, 2.3]
const conceito = (notas)=>{
    for(let i = 0; i < notas.length; i++){
        if(notas[i] < 0 || notas[i] > 10){
            console.log("Nota invalida!")
        }else if(notas[i] < 5){
            console.log(`A nota do aluno foi ${notas[i]}, ficando com o conceito D.`)
        }else if(notas[i] < 7 && notas[i] >= 5){
            console.log(`A nota do aluno foi ${notas[i]}, ficando com o conceito C.`)
        }else if(notas[i] < 9 && notas[i] >= 7){
            console.log(`A nota do aluno foi ${notas[i]}, ficando com o conceito B.`)
        }else if(notas[i] <= 10 && notas[i] >= 9){
            console.log(`A nota do aluno foi ${notas[i]}, ficando com o conceito A.`)
        }
        
    }
}

conceito(notas)