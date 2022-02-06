const aprovados = ['agatha', 'aldo', 'daniel', 'raquel']

aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1 }) ${nome} `)
    console.log(Array)
})

aprovados. forEach(nome => console.log(nome))

const exbirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exbirAprovados)
