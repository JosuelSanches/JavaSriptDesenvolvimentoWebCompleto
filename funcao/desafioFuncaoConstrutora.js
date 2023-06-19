function Pessoa(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    

    this.falar = function(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}` )
    }
}

const p1 = new Pessoa('João', 'Sanches')
p1.falar()