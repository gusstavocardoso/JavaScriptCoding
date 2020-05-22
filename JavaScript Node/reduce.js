var precos = [4.66, 3.78, 9.78, 1.34, 5.32];

var soma = 0;

for(var i = 0; i < precos.length; i++){
    soma = soma + precos[i];
}
//console.log(soma);

soma = 0;

precos.forEach(function(valor){
    soma += valor;
});

console.log(soma);

function somar(anterior, atual){
    return anterior + atual;
}

var ret = precos.reduce(somar);
console.log(ret);
