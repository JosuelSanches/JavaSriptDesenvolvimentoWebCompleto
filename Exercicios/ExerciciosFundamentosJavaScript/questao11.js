/*Crie uma função que receba uma array e retorne o primeiro
e o último elemento desse array como um novo array */
const firstAndLast = (a)=> {
    result = []
    for(let i = 0; i < a.length; i++){
        if(i == 0){
            result.push(a[i])
        }else if(i == (a.length -1)){
            result.push(a[i])
        }
    }return result
}
nomes = ['josuel', 'anna', 'tatiane', 'fernanda', 'hugo', 'raissa'] 
console.log(firstAndLast(nomes))