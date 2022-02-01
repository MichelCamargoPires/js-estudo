function getInteiroAleatorioEntre (min, max) {
    const Valor = Math.random() * (max - min) + min
    return Math.floor(Valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`opcao escolhida foi  ${opcao}.` )
}
console.log ('ate a proxima!')
