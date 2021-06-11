// original
// const faker = require('faker');

// usando faker-br
// const faker = require('faker-br');

const faker = require('faker-br');
let meuCpf = faker.br.cpf();
let nome = faker.name.firstName();
let sobreNome = faker.name.lastName();

console.log(meuCpf);
console.log(nome);
console.log(sobreNome);