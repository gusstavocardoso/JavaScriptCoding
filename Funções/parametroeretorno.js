function calcularIdade(anoNascimento){
    const data = new Date();
    
    const idade = data.getFullYear() - anoNascimento;

    return idade;
}

let ret = calcularIdade(1986);
console.log(ret);