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
        x = Math.floor(Math.random() * 10)
        Survivants.push(Noms[x])

        y = Math.floor(Math.random() * 5)
        Types.push(Caractéristiques[y].name)

    }
    console.log(Survivants)
    console.log(Types)
}
randomNames();
