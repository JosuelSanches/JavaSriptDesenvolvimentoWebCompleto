/*Elabore uma função que recebe um número como parâmetro 
e retorne uma string com o símbolo "+" na quantidade 
especificada no parâmetro.*/
const rept = (repetição)=>{
    let result = ''
    for(let i = 0; i < repetição; i++){
        result = result + '+' 
    }return result
}

console.log(rept(4))