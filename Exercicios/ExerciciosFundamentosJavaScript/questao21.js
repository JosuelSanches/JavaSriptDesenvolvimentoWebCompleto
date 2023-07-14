/*Crie uma funcao que receba um array de numeros e retorne 
o menor numero desse array. */

const menorNum = (nums)=>{
    let menor = 0 
    for(let i = 0; i < nums.length; i++){
        if(i == 0){
            menor = nums[i]
        }else if(menor > nums[i]){
            menor = nums[i]
        }
    }return menor
}
numeros = [914, 1989, 1302, 1099, 990, 3021]
console.log(menorNum(numeros))