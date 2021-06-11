var linguagens = [
    'JavaScript',
    'Ruby',
    'Python',
    'C#',
    'Java',
];

function imprimir(linguagen, indice, array){
    console.log(indice + ' - ' + linguagen);
    console.log(array);
}

linguagens.forEach(imprimir);

linguagens.forEach(function(linguagen, indice){
    console.log(`${indice} - ${linguagen}`);
});

for(var i = 0; linguagens < linguagens.length; i++){
    console.log(i + ' - ' + linguagens[i]);
}


// let apps = ['WhatsApp', 'Instagram', 'Facebook'];  
// let playStore = [];  
  
// apps.forEach(function(item){  
//   playStore.push(item)  
// });  
  
// console.log(playStore);  

var apps = ['WhatsApp', 'Instagram', 'Facebook'];  
var playStore = [];  
apps.forEach(function (item) {  
    playStore.push(item);  
});  
console.log(playStore);  

var num = [5, 10, 15];  
num.forEach(function (value) {  
  console.log(value);  
});  