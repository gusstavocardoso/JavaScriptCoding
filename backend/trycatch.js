// try{
//     console.log(nome);
// }catch(e){
//     console.log("Não foi possível imprimir o nome.");
//     console.log(e.name);
//     console.log(e.message);
// }

// console.log("JavaScript");

function dividir(num1, num2){
    if(num === 0 || num2 === 0){
        throw("Os valores devem ser positivos.");
    }else{
        return num1 / num2
    }
}

try{
    let ret = dividir(0, 2);
    console.log(ret);
}catch(e){
    console.log("Não foi possível dividir.");
}finally{
    console.log("Vamos continuar...")
}