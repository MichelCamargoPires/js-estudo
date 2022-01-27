class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class pai extends Avo {
    constructor(sobrenome, profissao = 'professor') {
        super (sobrenome)
        this.profissao = profissao
    }
}

class Filho extends pai {
    constructor() {
        super('silva')

    }
}

const filho = new Filho
console.log(filho)
