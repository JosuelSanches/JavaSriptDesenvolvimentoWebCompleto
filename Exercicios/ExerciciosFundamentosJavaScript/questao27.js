/*Desenvolva uma funcao que recebe um objeto como parametro e retorne
um outro objeto que corresponde ao objeto recebido com parametro, porem com as posicoes 
das chaves e valor invertidas, conforme exemplo a seguir: */
let obj ={
    a: 1,
    b: 2,
    c: 3
}
console.log(obj)
const inverter = (obj)=>{
    let novo = Object.entries(obj).map(obj => obj.reverse())
    return Object.fromEntries(novo)
}

/*const inverter = (objeto)=>{
    let invertido = Object.entries(objeto).map(chaveValor => chaveValor.reverse())
    return Object.fromEntries(invertido)
}*/

console.log(inverter(obj))

