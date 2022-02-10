function ps(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`meu nome e ${this.nome}`)
    }
}

const p1 = new ps ('michel')
p1.falar()
