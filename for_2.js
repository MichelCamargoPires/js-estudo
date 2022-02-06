const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'ano',
    sobrenome: 'silva',
    idade: 26,
    peso: 64
}

for(let atribuicao in pessoa) {
    console.log(`${atribuicao} = ${pessoa,atribuicao}`)
}
