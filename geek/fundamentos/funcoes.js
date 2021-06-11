function praticeReturn(retorno){
    console.log(`Isso é um teste do: ${retorno}`);
    return "Isso é um teste do: " + retorno;
}

console.log(praticeReturn("Retorno"));

function returnSoma(num1, num2){
    console.log("O resultado da soma é: " + (num1 + num2));
    return "O resultado da soma é: " + (num1 + num2); 
}

console.log(returnSoma(4, 4));

function semParametro(){
    return "função sem parâmetro";
}

console.log(semParametro());

function semRetorno(){
    console.log("Função sem retono");
}

semRetorno();

function semRetornoComParametro(parametro){
    console.log("Função sem retorno com parâmetro");
    return parametro;
}

console.log(semRetornoComParametro("Função sem retorno com parâmetro"));

