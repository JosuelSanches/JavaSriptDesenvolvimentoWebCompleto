const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove ultimo elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Remover usando o splice
pilotos.splice(3,1)// massa levou o farelo
console.log(pilotos)

// Criando um novo array a partir dos elementos deste
let algunsPilotos = pilotos.slice(2)
console.log(algunsPilotos)

algunsPilotos = pilotos.slice(2, 4)
console.log(pilotos)
console.log(algunsPilotos)