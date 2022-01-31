class pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar(){
        console.log(`meu nome e ${this.nome}`)
    }
}
const p1 = new pessoa('jan')
p1.falar()

const criarpessoa = nome => {
    return{
        falar: () =>console.log(`meu nome e ${nome}`)
    }
}

const p2 = criarpessoa('jan')
p2.falar
