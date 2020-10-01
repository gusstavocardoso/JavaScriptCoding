const readLineSync = require ('readline-sync');

var sexo = readLineSync.question("Qual é o seu sexo? ");

switch(sexo){
    case "M":
        console.log("Masculino");
        break;
    case "F":
        console.log("Feminino");
        break;
    default:
        console.log("Desconhecido");
        break;
}

