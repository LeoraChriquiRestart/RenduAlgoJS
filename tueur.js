let Jason = 100;

let Noms = [
    "Tyler",
    "Britney",
    "Jackson",
    "Emily",
    "Michael",
    "Kimberly",
    "Ashton",
    "Amber",
    "Justin",
    "Madison"
]



class Perso {
    constructor(name, probaDeath, probaDmg, probaKO) {
        this.name = name;
        this.probaDeath = probaDeath;
        this.probaDmg = probaDmg;
        this.probaKO = probaKO;
    }
    
}

let Caractéristiques = [
    new Perso("Nerd", 0.5, 0.2, 0.3),
    new Perso("Blonde", 0.4, 0.2, 0.4),
    new Perso("Sportif", 0.5, 0.4, 0.1),
    new Perso("Skater", 0.4, 0.4, 0.2),
    new Perso("Geek", 0.2, 0.5, 0.3),
]

let Survivants = [];
let Types = [];

function randomNames() {
    for(i = 0; i < 5; i++) {
        x = Math.floor(Math.random() * Noms.length)
        const randomNom = Noms[x]
        
        y = Math.floor(Math.random() * Caractéristiques.length)
        const randomType = Caractéristiques[y].name
        
        const Survivant = {
            nom : randomNom,
            type : randomType
        }
        
        Survivants.push(Survivant)
    }
}
randomNames();

function Attaque (Survivant) {
    const caractéristique = Survivant.type;
    const x = Math.random()

    if(probaDeath > x) {
        console.log("Jason a tué " + Survivant.nom)

    } else if(probaDmg > x) {
    

    }
}

console.log("CEST PAS FINI JE SAIS")

