// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Como o seu nome? ', (answer) => {
//     console.log(`Seu nome é: ${answer}`);
// });

var readlineSync = require('readline-sync'); 

var nome = readlineSync.question('Qual o seu nome? ');
console.log(`Então seu nome é ${nome}!`);
 
