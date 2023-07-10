const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
const chineses = f => f.pais === 'China'
const mulheres = f=> f.genero === 'F'
const menorSal =(funcAcumul, funcAtual) =>{
    return funcAcumul.salario < funcAtual.salario ? funcAcumul: funcAtual
} 

axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)
    /*Encontrar a mulher chinesa que ganha o menor salario */
    /*let menorSalChinesa = {salario: 1000000}
    const chinesaMenorSal = (pessoa) =>{
        for(let i in pessoa){
        if (pessoa[i].pais == 'China' && pessoa[i].genero == 'F'){
            if(pessoa[i].salario < menorSalChinesa.salario){
                menorSalChinesa = pessoa[i]
            }
        }
    }
    }
    chinesaMenorSal(funcionarios)
    console.log(menorSalChinesa)*/
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSal)
    console.log(func)
})