// Criando objeto através da factory function
const pessoa1 = (nome, sobrenome) => {
    return {
        andar: () => console.log(`${nome} ${sobrenome} está andando...`)
    }
}

const p1 = pessoa1('John', 'Wick');
console.log(p1);
console.log(typeof(p1));
p1.andar;

// Criando objeto através de uma função construtora
function pessoa2(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.andar = function(){
        console.log(`${nome} ${sobrenome} está andando...`) 
    }
}

const p2 = new pessoa2(`Eu`, `Mesmo`);
console.log(p2);
console.log(typeof(p2));
p2.andar();

// Criando objeto através de uma classe
class Pessoa3{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    andar(){
        console.log(`${this.nome} ${this.sobrenome} está andando...`);
    }
}

const p3 = new Pessoa3('Sebastian', 'Bach');
console.log(p3);
console.log(typeof(p3));
p3.andar();



