 const valor = 'global'

 function minhafuncao(){
    console.log(valor)
 }
 function exec(){
    const valor = 'Local'
    minhafuncao()
 }

 exec()