const readlineSync = require('readline-sync');

var idade = readlineSync.question("Informe sua idade ");

console.log(idade);

if(idade <= 18){
    console.log("Menor de idade");
}else{
    console.log("Maior de idade");
}

if(idade <= 14){
    console.log("Criança")
}else if(idade > 14 && idade < 18){
    console.log("Adolescente");
}else{
    console.log("Adulto");
}

// Verifica o valor (1)
if(1 == "1"){
    console.log('Sim, 1 == "1"');
}else{
    console.log("Não");
}

// Verifica o valor e o tipo de dado 1 inteiro e "1" String
if(1 === "1"){
    console.log('Sim, 1 == "1"');
}else{
    console.log("Não");
}
