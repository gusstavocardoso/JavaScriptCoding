class Funcao{
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;
    }

    get descricao(){
        return this._descricao;
    }

    set descricao(descricao){
        this._descricao = descricao;
    }

    get salario(){
        return this._salario;
    }

    set salario(salario){
        this._salario = salario;
    }
}

class Pessoa{
    constructor(nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }

    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }
    
    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }

    get cpf(){
        this._cpf = this.cpf;
    }
    
    imprimir_dados(){
        console.log(`${this.nome} ${this.sobrenome}`);
    }
}

class Funcionario extends Pessoa{
    constructor(nome, sobrenome, email, cpf, funcao, registro){
        super(nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }

    get funcao(){
        return this._funcao;
    }

    set funcao(funcao){
        this._funcao = funcao;
    }

    get registro(){
        return this._registro;
    }

    set registro(registro){
        this._registro = registro;
    }

    //Método sobrescrito
    imprimir_dados(){
        super.imprimir_dados()
        console.log(`Registro: ${this.registro} \nSalário: ${this.funcao.salario}`);
    }
}

class Cliente extends Pessoa{
    constructor(nome, sobrenome, email, cpf, renda){
        super(nome, sobrenome, email, cpf);
        this._renda = renda;
    }

    get renda(){
        return this._renda;
    }
       
    set renda(renda){
        this._renda = renda;
    }
}

const prog = new Funcao('Programador', 5987.44);
const f1 = new Funcionario('Sub', 'Zero', 'subzero@mortalkombat.com', '64144772810', prog, 'F1020eg');
const c1 = new Cliente('He', 'Man', 'heman@heman.com', '12345678910', 4567.88);

f1.imprimir_dados();
c1.imprimir_dados();