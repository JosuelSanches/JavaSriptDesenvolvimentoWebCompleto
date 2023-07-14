/*Faca uma funcao que receba a base e a altura de um triangulo e retorne
a area desse triangulo. A precisao devera ser de duas casas decimais,
 arredondando se necessario.*/

 const areaTriangulo = (base, altura)=>((base*altura)/2).toFixed(2)

 console.log(areaTriangulo(9.25,13.1))