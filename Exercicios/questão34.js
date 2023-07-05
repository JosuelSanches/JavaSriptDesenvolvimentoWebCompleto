/*) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
 */

let stringIgual = (string1, string2) => {
    let igual =  string1.toUpperCase() === string2.toUpperCase()
    return igual
}
console.log(stringIgual('josuel', 'Josuel'))