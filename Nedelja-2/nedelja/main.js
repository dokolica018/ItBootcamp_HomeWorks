/**--------------------
Nacrtati dijamant kao na primeru:

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *


 ---------------------*/


 function dijamant(size) {
    let col = size * 2 - 1;
    for (let i = 1; i <= size; i++) {
      let s = "";
      for (let j = 1; j <= col; j++) {
        if (j >= size + 1 - i && j <= size - 1 + i) {
          s += "*";
        } else {
          s += " ";
        }
      }
      console.log(s);
    }
    for (let i = size - 1; i >= 1; i--) {
      let s = "";
      for (let j = 1; j <= col; j++) {
        if (j >= size + 1 - i && j <= size - 1 + i) {
          s += "*";
        } else {
          s += " ";
        }
      }
      console.log(s);
    }
  }
  console.log((diamond(5)));