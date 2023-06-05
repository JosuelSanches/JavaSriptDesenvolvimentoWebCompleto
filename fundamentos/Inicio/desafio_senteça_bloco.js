/**
 * Imprima numeros de um a 10, sendo que do os numeros 
 * impares devem ser impressos em um bloco diferente do
* bloco onde os numeros pares serão impressos.
*/

let i = 0
console.log('Os numeros impares são: ')
while(i <= 10){
    if (i % 2 == 1){
        console.log('O valor é = '+i)
    }
i++
}
i =0
    
console.log('Os numeros pares são: ')
while(i <=10){    
    if (i%2 ==0){
        console.log('O valor é = '+i)
}
i++
}