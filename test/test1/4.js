{// 4. Zadatak (20 poena)
// ​
//     Za svaki broj (od 1 do N ukljucujuci granice) ispisati sve brojeve od tog broja do 1 (opadajuci redosled)
// ​
//     ```
//     Primer za N = 9
//     1
//     2 1
//     3 2 1
//     4 3 2 1
//     5 4 3 2 1
//     6 5 4 3 2 1
//     7 6 5 4 3 2 1
//     8 7 6 5 4 3 2 1
//     9 8 7 6 5 4 3 2 1
//     ```

let n = 9
let j = 0
let broj = 0
for (let i = 1; i <= n; i++) {
    for (let j = i; j > 0; j--) {
        console.log(i+" ".repeat(i-j))+'\n';
    }

}
}
var i, j;
for(i=1; i<=5; i++)
{
 for(j=i; j>=1; j--)
  document.write(j);
 document.write("<br>");
}