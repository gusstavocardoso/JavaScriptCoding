class Pessoa{
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        return this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }
    
    set sobrenome(sobrenome){
        return this._sobrenome = sobrenome;
    }
    
    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo...`)
    }

    beber(){
        console.log(`${this.nome} está bebendo...`)
    }
}

class Carro{
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        return this._modelo = modelo;
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }    
}

// // Instânciando objetos - Forma 1
// let guitarra = new Object();
// guitarra.marca = 'Ibanez';
// guitarra.modelo = 'RG Series'

// // Adiciona atributo     
// guitarra['cordas'] = 7;

// console.log(guitarra);

// // Remove atributos
// delete guitarra['cordas'];

// console.log(guitarra);

// Instânciando objetos - Forma 2
// const programa = {
//     nome: 'Guitar Pro 7',
//     preco: 219.99,
//     fabricante: {
//         nome: 'Arobas',
//         contato: 'contact@arobas.com',
//         endereco: {
//             rua: 'Do Solo',
//             bairro: 'Virtuoses',
//             cidade: 'San Jimi Hendrix'
//         },
//         filiais: [
//             {cidade: 'Long Island'},
//             {cidade: 'Texas'}
//         ]
//     }      
// }

// console.log(programa);
// console.log(programa.nome);

// Instânciando por função construtora
function Lampada(cor){
    this.cor = cor;
}

const l1 = new Lampada('branca');
console.log(l1);
console.log(typeof(l1));

// Instânciando pela classe
const p1 = new Pessoa('Gustavo', 'Cardoso');
console.log(p1);
console.log(typeof(p1));
console.log(p1.nome);
console.log(p1.sobrenome);

p1.nome = 'Yngwie';
console.log(p1);

p1.falar('alguma coisa...');
p1.comer();
p1.beber();

const civic = new Carro('Civic');
console.log(civic);
civic.imprimir();