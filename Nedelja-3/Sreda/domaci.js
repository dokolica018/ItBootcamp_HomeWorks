
//  * 1. Napisati funkciju koja vrsi sumiranje i mnozenje jednog niza i vratiti te vrednosti u niz
//  * 
console.log(`Zbir je: ` + zbirIproizvod().zbir);
console.log(`Proizvod je: ` + zbirIproizvod().proizvod);
function zbirIproizvod() {
    let niz = [1, 2, 3, 4, 5]
    let zbir = 0
    let proizvod = 1
    for (let i = 0; i < niz.length; i++) {
        zbir += niz[i]
        proizvod *= niz[i]
    }
    dodajUniz(niz, zbir, proizvod)
    return {
        zbir, proizvod
    }
}
function dodajUniz(niz, zbir, proizvod) {
    niz.push(zbir)
    niz.push(proizvod)
    console.log(niz);
    return niz
}
console.log('-----------------------');
// * 2. Napisati funkciju koja iz datog niza izbacuje null, undefined, NaN, 0, "" itd...
let niz1 = [1, 2, 3, 4, 5, 0, null, 6, 7, undefined, false, NaN, 8, 9, 10]
console.log(niz1);
function pogresni_array(niz) {
    let index = -1
    let duzina = niz ? niz.length : 0
    let indexR = -1
    let result = []

    while (++index < duzina) {
        let value = niz[index];

        if (value) {
            result[++indexR] = value;
        }
    }

    return result;
}
console.log(pogresni_array(niz1));
console.log('-----------------------');
// *
// * 4. За првих 100 бројева исписати:
// *       ако је дељив са 3  Fizz, са 5  Buzz, и са оба  FizzBuzz, у супротном Broj
// *       Ако је дељив са 3,5,7 - FizzBuzzZazz
// *       3,5 - FizzBuzz
// *       3,7 - FizzZazz
// *       5,7 - BuzzZazz
// * 
let niz = []
for (let i = 1; i <= 100; i++) {
    niz.push(i)
}
for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 3 == 0 && niz[i] % 5 == 0 && niz[i] % 7 == 0) {
        niz[i] = "FizzBuzzZazz"

    }
    if (niz[i] % 3 == 0 && niz[i] % 5 == 0) {
        niz[i] = "FizzBuzz"

    }
    if (niz[i] % 3 == 0 && niz[i] % 7 == 0) {
        niz[i] = "FizzZazz"

    }
    if (niz[i] % 3 == 0 && niz[i] % 7 == 0) {
        niz[i] = "BuzzZazz"

    }
    if (niz[i] % 3 == 0) {
        niz[i] = "Fizz"
    } if (niz[i] % 5 == 0) {
        niz[i] = "Buzz"
    } if (niz[i] % 7 == 0) {
        niz[i] = "Zazz"

    }

}
console.log(niz);
console.log('-----------------------');
/**

 * 5. Izvrsiti inverziju brojeva bez pomocne promenljive. 
 *      Pr: x = 5 y = 9
 *      Resenje: x = 9 y = 5
 *      pom = "ne mozete koristiti"
 * 
 */
let x = 5
let y = 9
console.log(x, y);
x = y - x
y = y - x
x = x + y
console.log(x, y);


















