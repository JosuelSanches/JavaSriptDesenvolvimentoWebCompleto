/**Elabore duas funções que recebem três parâmetros: 
 * capital incial, taxa de juros e tempo de aplicação.
 * A primeira função retornará o montante da aplicação financeira sob o regime de juros simples 
 * e a segunda retornará o valor 
 * da aplicação sob o regime de juros compostos.
 * 
 * **/

const montante = (capInicial, taxaJuros, tempo)=> (capInicial+(capInicial*taxaJuros*tempo)).toFixed(2)
const valor = (capInicial, taxaJuros, tempo)=> (capInicial*((1+taxaJuros)**tempo)).toFixed(2)

console.log(`O valor do montante com ganhos em juros simples é : ${montante(1200, 0.05, 12)}`)
console.log(`O valor do montante em juros compostos é: ${valor(1200, 0.05, 12)}`)
