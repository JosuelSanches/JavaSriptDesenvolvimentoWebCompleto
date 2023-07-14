/*Numa aplicacao Web de investimentos financeiros
da qual voce faz parte da equipe de desenvolvimento,
pretende-se adicionar a fincionalidade de calcular a media
de um conjunto de numeros informados pelo usuario.
Com o intuito de realizar esse calculo, crie uma funcao
 que receba um array com uma quantidade indeterminada de 
 numeros e retorne a media simples desses numeros  */

 const calcularMedia = (nums)=>{
    let media = 0
    for(let i = 0; i < nums.length; i++){
        media += nums[i]
    }
    media = media/ nums.length
    return media
 }

 let numeros = [10, 10, 100]
 console.log(calcularMedia(numeros))