class lancamentos{
    constructor(nome = 'generico', valor = 0) {
        this.nome 
        this.valor
    }
}

class ciclofinaceiro {
    constructor(mes, ano) {
        this.mes = mes 
        this.ano = ano
        this.lancamentos = []
    }
 
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }


    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
      
        })
        return valorConsolidado
    }

}
const salario = new lancamentos('salario', 4500)
const contaDeLuz = new lancamentos('luz', -220)

const contas = new ciclofinaceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz )
console.log(contas.sumario())
