
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
    Sposobnosti: ['bljuvanje vatre', 'branje tresanja', 'spaljivanje djubreta', 'moze da pozuti','najjaci pokemon','najdobrocudniji pokemon'],
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
let pokemon5={}
let pokemon6={}
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

//nadovezivanje na 3 zadatak sa predhodnog domaceg
//1. Napraviti html strukturu da se na pocetku vide 2 button-a. Kada se klikne na oba (naravno ponaosob), 
//trebaju se izlistati svi pokemoni iz niza u svom dugmetu. Na klik jednog dugmeta, trebaju se izlistati
//sve informacije o tom pokemonu.

let container = document.querySelector('.container')
let row = document.querySelector('.row')
let cardHeader = document.querySelector('.card-header')
let cardBody = document.querySelector('.card-body')
let cardFooter = document.querySelector('.card-footer')

let text = ''

nizPokemona.forEach((pokemon,i) => {
    text+=`
<div class="col-6">
    <div id="card${i}" class="card">
        <div class="card-header"><h3>${nizPokemona[i].Ime}</h3></div>
            
        <div class="card-body"><img src="img/pokemon${i}.png" alt=""></div>

        <div class="card-footer">
        <div>
        <p>Napad: ${pokemon.Karakteristike.Napad}</p>
        <p>Odbrana: ${pokemon.Karakteristike.Odbrana}</p>
        <p>Brzina: ${pokemon.Karakteristike.Brzina}</p></div>

        <div><a href=""><img id="ball" src="img/ball.png" alt=""></a></div>
        
        </div>
        <div class="cardFooter"  id="cardFooter${i}">
        <div><h5>SPOSOBNOSTI:</h5><p class="lista-sposobnosti">${pokemon.Sposobnosti}</p></div>
        </div>
        
        </div>
        </div>`

});
row.innerHTML+=text
let card = document.querySelectorAll('.card')
let card0 = document.querySelector('#card0')
let card1 = document.querySelector('#card1')
let card2 = document.querySelector('#card2')
let card3 = document.querySelector('#card3')
let cardFooter0 = document.querySelector('#cardFooter0')
let cardFooter1 = document.querySelector('#cardFooter1')
let cardFooter2 = document.querySelector('#cardFooter2')
let cardFooter3 = document.querySelector('#cardFooter3')
let player1Btn = document.querySelector('.btn1')
let player2Btn = document.querySelector('.btn2')
let cardFooterDonji = document.querySelectorAll('.cardFooter')
let ball = document.querySelectorAll('a')

card.forEach(card => {
    card.style.display = "none"
});

player1Btn.addEventListener('click',() => {
    card[0].style.display = "block"
    card[1].style.display = "block"
    cardFooter0.style.display = 'none'
    cardFooter1.style.display = 'none'
})
player2Btn.addEventListener('click',() => {
    card[2].style.display = "block"
    card[3].style.display = "block"
    cardFooter2.style.display = 'none'
    cardFooter3.style.display = 'none'
})

ball.forEach((b,i) => {
    b.addEventListener('mousemove',() => {
        cardFooterDonji[i].style.display = "block"
    })
});
ball.forEach((b,i) => {
    b.addEventListener('mouseleave',() => {
        cardFooterDonji[i].style.display = "none"
    })
});



