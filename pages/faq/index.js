export default class Cachorro { // SuperEntidade
    Latir() {
        console.log("Auau");
        
    }
}

class Pessoa extends Cachorro { // SubEntidade
    
}

let pessoa = new Pessoa()

pessoa.Latir()