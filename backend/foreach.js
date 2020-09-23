var guitarras = [
    'Fender',
    'Gibson',
    'Ibanez',
    'Jackson',
    'ESP',
    'Suhr'
];

function impimir(guitarras, indice, array){
    console.log(indice + '-' + guitarras);
    //console.log(array);
}

// guitarras.forEach(impimir);

guitarras.forEach(function(guitarras, indice){
    console.log(`${indice} - ${guitarras}`);
});