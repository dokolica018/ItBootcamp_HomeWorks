// 3. Zadatak (30 poena)
// ​
//     Napisati program koji racuna prosecnu vrednost brojeva izmedju N i M (ukljucujuci N i ne ukljucujuci M):
//     1. Prosecna vrednost svih brojeva (40% poena)
//     2. Prosecna vrednost brojeva koji sadrze cifru 2 (60% poena)
// ​
// ​
//     ```
//     let N = 194
//     let M = 3
//     ```
//     ```
//     Prosek svih brojeva je: 98.
//     Prosek brojeva sa cifrom 2 je: 88.
//     ```

let n = 194
let m = 3
let count = 0
let prosek = 0
for (let i = m; i < n; i++) {
    if (i.toString().includes(2)) {
        
        count++
        prosek+=i
    }
}
console.log(`${prosek/count}`);