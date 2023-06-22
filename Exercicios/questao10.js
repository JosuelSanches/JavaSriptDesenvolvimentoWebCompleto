/**
Crie uma função que verifica se um 
número inteiro passado como parêmetro 
é divisível por 3 e retorne true
ou false.
 */

const divPor3 = (num)=>{
    if(!!Number.isInteger(num)){
        if(num%3==0){
            return true
        }else{
            return false
        }
    }else{
        return `Valor invalido!!`
    }
}

console.log(divPor3(8.0))