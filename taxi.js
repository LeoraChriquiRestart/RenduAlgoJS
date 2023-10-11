let Albator = 10;

const Musiques = [
    "Anissa - Wejdene",
    "Style - Taylor Swift",
    "Fetish - Selena Gomez",
    "Sh-Boom - The Chords",
    "7 Years - Lukas Graham"
]

let feuxRouges = 30;
let changements = 0;

function Radio() {
    x = Math.floor(Math.random() * 5);
}

while (feuxRouges > 0 && Albator != 0) {
    Radio();
    feuxRouges -= 1;
    console.log(Musiques[x] + " passe à la radio. Il reste "+ feuxRouges + " feux avant d'arriver.")

    
    if(x == 0) {
        Albator -= 1;
        changements += 1;
        console.log("Albator n'aime pas la chanson, il change donc de taxi. Il lui reste " + Albator + " de santé mentale.")
    }

    if (Albator == 0) {
        console.log("Albator explose !!")
    }

}

if (feuxRouges == 0 && Albator != 0) {
    console.log("Albator est bien rentré chez lui. Il lui aura fallu " + changements + " changements de taxi.")
}

