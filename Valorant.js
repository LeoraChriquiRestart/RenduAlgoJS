
let attackWins = 0;
let defWins = 0;



function Partie() {
    
    while (attackWins < 13 && defWins < 13) {
        
        let nbManches = attackWins + defWins + 1

        console.log("Une nouvelle manche commence. Manche " + nbManches + " :")
        
        let Attaquants = ["Attaquant Chamber", "Attaquant Jett", "Attaquant Fade", "Attaquant Omen", "Attaquant Phoenix"];
        let Défenseurs = ["Défenseur Chamber", "Défenseur Jett", "Défenseur Fade", "Défenseur Omen", "Défenseur Phoenix"];
    
        let c = 5

        let premierMort = Math.floor(Math.random() * c)
        let premierTueur = Math.floor(Math.random() * c)
        

        let x = Math.random()

        if (x < 0.5) {
            console.log(Attaquants[premierTueur] + " a tué " + Défenseurs[premierMort])
            Défenseurs.splice(premierMort, 1)
            c -= 1;
        } else {
            console.log(Défenseurs[premierTueur] + " a tué " + Attaquants[premierMort])
            Attaquants.splice(premierMort, 1)
            c -= 1
        }

        let amorce = Math.random()

        if(Défenseurs.length > Attaquants.length) {

            if(amorce <= 0.4) {

                console.log("Le spike a été amorçé.")
                
                while(Attaquants.length > 0 && Défenseurs.length > 0) {

                    let duelGagné = Math.random()
                    
                    let Att = Math.floor(Math.random() * Attaquants.length)
                    let Def = Math.floor(Math.random() * Défenseurs.length)
                    
                    if(duelGagné <= 0.7) {
        
                        console.log(Attaquants[Att] + " a tué " + Défenseurs[Def])
                        Défenseurs.splice(Def, 1)
        
                    } else {
                        console.log(Défenseurs[Def] + " a tué " + Attaquants[Att])
                        Attaquants.splice(Att, 1)
                    }
                }

            } else {

                
                while(Attaquants.length > 0 && Défenseurs.length > 0) {
                    
                    let Duel1 = Math.floor(Math.random() * Attaquants.length)
                    let Duel2 = Math.floor(Math.random() * Défenseurs.length)
                    
                    
                    let z = Math.random()
                    
                    if (z < 0.5) {
                        console.log(Attaquants[Duel1] + " a tué " + Défenseurs[Duel2])
                        Défenseurs.splice(Duel2, 1)
                        
                    } else {
                        console.log(Défenseurs[Duel2] + " a tué " + Attaquants[Duel1])
                        Attaquants.splice(Duel1, 1)
                        
                    }
                }  
                console.log("Le spike n'a pas été amorçé.")
            }

        } else {
            
            if(amorce <= 0.6) {

                while(Attaquants.length > 0 && Défenseurs.length > 0) {
                    let duelGagné = Math.random()
                    
                    let Att = Math.floor(Math.random() * Attaquants.length)
                    let Def = Math.floor(Math.random() * Défenseurs.length)

                    if(duelGagné <= 0.7) {

                        console.log(Attaquants[Att] + " a tué " + Défenseurs[Def])
                        Défenseurs.splice(Def, 1)

                    } else {
                        console.log(Défenseurs[Def] + " a tué " + Attaquants[Att])
                        Attaquants.splice(Att, 1)
                    }
                }

            } else {   
                
                while(Attaquants.length > 0 && Défenseurs.length > 0) {
                    let Duel1 = Math.floor(Math.random() * Attaquants.length)
                    let Duel2 = Math.floor(Math.random() * Défenseurs.length)
                    
                
                    let z = Math.random()
                
                    if (z < 0.5) {
                        console.log(Attaquants[Duel1] + " a tué " + Défenseurs[Duel2])
                        Défenseurs.splice(Duel2, 1)
                        
                    } else {
                        console.log(Défenseurs[Duel2] + " a tué " + Attaquants[Duel1])
                        Attaquants.splice(Duel1, 1)
                        
                    }
                }  
            }


        }

        if(Défenseurs.length == 0 && Attaquants.length != 0) {
            console.log("Les attaquants ont tué tous les défenseurs, ils gagnent la manche.")
            attackWins += 1;
        } else {
            console.log("Les défenseurs ont tué tous les attanquants, ils gagnent la manche.")
            defWins += 1;
        }

    }

    if(attackWins == 13 && defWins != 13) {
        console.log("Victoire des attaquants !")
    } else {
        console.log("Victoire des défenseurs !")
    }

    console.log("Le score est de " + attackWins + " - " + defWins)

    console.log(attackWins, defWins)
}


Partie()