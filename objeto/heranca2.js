Object.prototype.attr0 = '0'
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C', attr2: 'b'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return`${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari ={
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo ={
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status}`// mostra o mesmo texto, mas com o adcional do modelo
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)
volvo.aceleraMais(150)
console.log(volvo.status())
ferrari.aceleraMais(350)
console.log(ferrari.status())