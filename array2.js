const pilotos = [ 'vettel', 'alonso', 'rkkonen', 'massa']
pilotos.pop()// massa quebrou o carro!
console.log(pilotos)

pilotos.push ('verstappen')
console.log(pilotos)

pilotos.shift()// remove primeiro
console.log(pilotos)

pilotos.unshift('humilton')
console.log(pilotos )

// splice pode adicionar e remover alementos 

// adicionar
pilotos.splice(2, 0, 'bottas','massa')
console.log(pilotos)

//remover 
pilotos.splice(3, 1)//massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(pilotos)
