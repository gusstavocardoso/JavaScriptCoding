// Forma 1
var guitarristas = new Array('Jimi Hendrix', 'Steve Vai', 'Malmsteen', 'Vinnie Moore');
console.log(guitarristas);

// Forma 2
var notas = [1, 3, 5, 7, 9];
console.log(notas);

// Acessando índice
console.log(notas[2]);

// Alterando índice
notas[2] = 12;
console.log(notas);

var marcas = ['Tagima', 'Fender', 'Gibson'];
console.log(marcas);

// Insere valor no final do array
marcas.push('Ibanez');
console.log(marcas);

// Ordenar dados
marcas.sort();
console.log(marcas);

// Deletar dados
var pedal = ['DS1', 'Cry Baby', 'Chorus'];

// delete pedal[1];
// pedal.splice(2, 1);

// console.log(pedal);

// Remove o último elemento
// pedal.pop();
// console.log(pedal);

// Rewmove o primeiro elemento
pedal.shift();
console.log(pedal);
