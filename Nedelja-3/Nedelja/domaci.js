
//1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5
nizBrojeva()
function nizBrojeva() {
    let niz = []
    for (let i = 1; i <= 25; i++) {
        niz.push(i)
    }
    // console.log(niz);
    deljivi(niz)
}
function deljivi(niz5) {
    let nizDeljivihSa5 = []
    niz5.forEach(broj => {
        if (broj % 5 == 0) {
            console.log(broj);
            nizDeljivihSa5.push(broj)
        }
    });
    console.log(nizDeljivihSa5);
}


//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// * Ime 
// * Vrsta 
// * Sposobnosti (niz sposobnosti pokemona) 
// * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

//(Napraviti niz od ovih objekata)


let pokemon1 = {
    Ime: 'Pikacu',
    Vrsta: 'vatreni',
    Sposobnosti: ['bljuvanje vatre', 'branje tresanja', 'spaljivanje djubreta', 'moze da pozuti'],
    Karakteristike: {
        Napad: 20,
        Odbrana: 65,
        Brzina: 10
    }
}
let pokemon2 = {
    Ime: 'Slikacu',
    Vrsta: 'vodeni',
    Sposobnosti: ['gasenje vatre', 'branje pecuraka', 'sakupljanje buba', 'moze da se pretvori u zabu'],
    Karakteristike: {
        Napad: 110,
        Odbrana: 165,
        Brzina: 100
    }
}
let pokemon3 = {
    Ime: 'Okamenicu',
    Vrsta: 'kameni',
    Sposobnosti: ['bacanje kamena', 'rad u kamenolomu', 'sakupljanje kamenja', 'drobljenje kamena', 'moze da se pretvori u kamen'],
    Karakteristike: {
        Napad: 70,
        Odbrana: 65,
        Brzina: 30
    }
}
let pokemon4 = {
    Ime: 'Bulbasaura',
    Vrsta: 'iskusni',
    Sposobnosti: ['sticanje iskustva', 'branje iskustva', 'sakupljanje iskustva', 'deljenje iskustva', 'moze da pozeleni'],
    Karakteristike: {
        Napad: 40,
        Odbrana: 165,
        Brzina: 70
    }
}
let nizPokemona = [pokemon1, pokemon2, pokemon3, pokemon4]

//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona
sposobnosti(nizPokemona)
function sposobnosti(niz) {
    let nizSvihSposobnosti = []
    niz.forEach(pokemon => {
        for (const prop in pokemon) {
            if (prop === "Sposobnosti") {
                nizSvihSposobnosti.push(...pokemon[prop])
            }
        }
    });
    console.log(nizSvihSposobnosti);
    return nizSvihSposobnosti
}


//4. Sortirati pokemone po brzini, rastuće.
nizPokemona.sort((a,b)=>{
    if (a.Karakteristike.Brzina > b.Karakteristike.Brzina) {
        return 1
    }else{
        return -1
    }
})
nizPokemona.forEach(pokemon=>{
    console.log(pokemon.Karakteristike.Brzina);
})
console.log(nizPokemona);
//5. Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika onog koji ima najveću jačinu napada.
najjaciP(nizPokemona)
function najjaciP(niz) {
    let najjaci = niz.reduce((a, b) => {
        if (a.Karakteristike.Napad > b.Karakteristike.Napad) {
            return a
        }else{
            return b
        }
    })
    console.log(najjaci);
    return najjaci
}





