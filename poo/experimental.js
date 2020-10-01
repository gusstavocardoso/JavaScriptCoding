class Guitarra{
    constructor(marca, modelo){
        this._marca = marca;
        this._modelo = modelo;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get modelo(){
        return this._modelo;
    }
    set modelo(modelo){
        this._modelo = modelo;
    }
    solar(){
        console.log(`Solando com a guitarra ${this._marca}`);
    }
    arpejar(){
        console.log(`Arpejando com a guirarra ${this._marca}`);
    }    
}
const guitar1 = new Guitarra('Fender', 'Stratocaster');
console.log(guitar1);
console.log(guitar1.marca);
console.log(guitar1.modelo);
guitar1.solar();
guitar1.arpejar();

