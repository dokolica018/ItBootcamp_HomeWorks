{// 2. Zadatak (25 poena)
// ​
//     Napisati program koji ispisuje prikazanu sliku za uneto N (Bez provere za N)
// ​
//     Napomena: Za pola poena ispisati samo DESNI deo slike (ostalo nosi 0 poena)
// ​
//     ```
//     N = 4        N = 5
//     ********     **********
//     ***  ***     ****  ****
//     **    **     ***    ***
//     *      *     **      **
//     *      *     *        *
//     **    **     *        *
//     ***  ***     **      **
//     ********     ***    ***
//                  ****  ****
//                  **********
//     ```
//     Za pola bodova:
//     ```
//     N = 4    N = 5
//     ****     *****
//      ***      ****
//       **       ***
//        *        **
//        *         *
//       **         *
//      ***        **
//     ****       ***
//               ****
//              *****
//     ```

let n = 4
let i
for (let i = 0; i < n; i++) {
    console.log("*".repeat(n-i)+" ".repeat(i*2)+'*'.repeat(n-i));
}
for (let i = 0; i <= n; i++) {
    console.log("*".repeat(i)+" ".repeat((n-i)*2)+'*'.repeat(i));
}
}