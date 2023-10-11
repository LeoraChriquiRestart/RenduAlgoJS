class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        let lucky = Math.floor(Math.random() * 100)
        
        if(lucky <= this.luck) {
            return true
        } else {
            return false
        }
    }
    
    attackPokemon(adversaire) {
        let dmg = this.attack - adversaire.defense;
        adversaire.hp -= dmg; 
        console.log( adversaire.name + " a pris " + dmg + " de dégats. Il lui reste " + adversaire.hp + " PV.")
    }
}

let Pikachu = new Pokemon("Pikachu", 55, 45, 40      , 80);
let Evoli = new Pokemon("Evoli", 60, 40, 55, 60);

while (Evoli.hp > 0 && Pikachu.hp > 0) {

    if (Pikachu.isLucky() == true) {
        console.log("Pikachu attaque Evoli.")
        Pikachu.attackPokemon(Evoli)
    } else {
        console.log("Pikachu n'a pas pu attaquer")
    }

    if (Evoli.hp <= 0) {
        console.log("Evoli est mort, il perd la bagarre.")
        break
    }

    if (Evoli.isLucky() == true) {
        console.log("Evoli attaque Pikachu.")
        Evoli.attackPokemon(Pikachu)
    } else {
        console.log("Evoli n'a pas pu attaquer")
    }
    
    if (Pikachu.hp <= 0) {
        console.log("Pikachu est mort, il perd la bagarre.")
        break
    }

}