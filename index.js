// CLASSE
class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(){
        let attackType
        if (this.type === "Mago"){
            attackType = "magia"
        } else if (this.type === "Guerreiro"){
            attackType = "espada"
        } else if (this.type === "Monge"){
            attackType = "artes marciais"
        } else if (this.type === "Ninja"){
            attackType = "shuriken"
        }
        let attack = attackType
        return attack

    }

    print(){
        if (this.type === "Mago" || this.type === "Guerreiro" || this.type === "Monge" || this.type === "Ninja"){
            console.log(`o ${this.type} atacou usando ${this.attack()}!`)
        } else{
            console.log("Classe Inválida!")
            console.log("Escolha entre: Mago, Guerreiro, Monge ou Ninja")
        }
    }

}

//VARIÁVEIS
let player1 = new hero("Juremildo", 40, "Guerreiro")

// SAÍDA
player1.print()