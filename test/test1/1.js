// 1. Zadatak (25 poena)
// ​
//     Napisati funkciju racun(cena,dan,penzioner)
//     * cena - Broj veci od 0 - Proveriti ispravnost
//     * dan - Broj izmedju 1 i 7 (oznacava dane u nedelji) - Bez provere
//     * penzioner - true / false (oznacava da li je kupac penzioner) - Bez provere
// ​
//     Funkcija VRACA racun na sledeci nacin:
//     1. Ako je kupac penzioner i nedelja je: popust od 25%
//     2. Ako je kupac penzioner i nije nedelja: popust od 10%
//     3. Ako kupac nije penzioner i sreda je: popust od 10%
//     4. Ako kupac nije penzioner i nije sreda: nema popusta
// ​
//     Napomena: Rad bez funkcije - 60% poena
// ​
//     ```
//     Primer:
//     racun(150,1,false)
//     racun(100,7,true)
//     racun(100,3,true)
//     ```
//     ```
//     150 - Nema popusta, jer vazi slucaj 4
//     75 - Popust 25%, jer vazi prvi slucaj
//     90 - Popust 10%, jer vazi 2. slucaj
// ​


// let cena = 0
// let dan  = 3
// let penzioner = true


function racun(cena, dan, penzioner) {
    if (cena > 0 ) {
        if (dan == 7 && penzioner == true) {
            cena = cena - (cena*0.25)
            return cena
        }
        if (dan != 7 && penzioner == true) {
            cena = cena - (cena*0.1)
            return cena
        }
        if (dan != 3 && penzioner == false) {
            cena = cena
            return cena
        }
        return dan
    }
    return penzioner
    
}
let racun1 = racun(220, 2, false)
console.log(racun1);