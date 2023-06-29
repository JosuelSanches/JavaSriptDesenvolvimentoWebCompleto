/**
Escreva um algoritmo que leia o código de um aluno e suas três notas. 
Calcule a média ponderada do aluno, 
considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. 
Mostre o código do aluno, suas três notas, a média calculada e uma mensagem
"APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5.
Repita a operação até que o código lido seja negativo.

 */
const statusAluno = (codigo, nota1, nota2, nota3) =>{
    let peso1 = 4
    let peso2 = 3
    let media = 0
    if(nota1>= nota2 && nota1>= nota3){
        media = (((nota1*peso1)+ (nota2*peso2)+(nota3*peso2))/(peso1+peso2+peso2))
    }else if(nota2> nota1 && nota2> nota3){
        media = ((nota1*peso2)+ (nota2*peso1)+(nota3*peso2))/(peso1+peso2+peso2)
    }else if(nota3>= nota2 && nota3> nota1){
        media = ((nota1*peso2)+ (nota2*peso2)+(nota3*peso1))/(peso1+peso2+peso2)
        }
    console.log(`O aluno de codigo ${codigo} com as notas de ${nota1}, ${nota2}, ${nota3}, média ponderada de ${media} foi ${media < 5? 'Reprovado': 'Aprovado'}.`)
}

let resultado = statusAluno(1, 1, 10, 10)
