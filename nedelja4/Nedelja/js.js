/**
 *
 * 1. Napisati funkciju koja na klik dodaje jedan red u tabeli. HTML kreirati proizvoljno.
 * 2. Napisati funkciju koja na klik dugmeta vrsi sabiranje 2 broja iz input polja i zbir ispisati na ekranu. HTML kreirati proizvoljno.
 *
 * 3. Nadovezivanje na predhodni zadatak. Dodati checkbox polje koje kada je selektovano prikazuje se kalkulator a obrnuto se skloni sa ekrana.
 */
let inp1 = document.querySelector('#num1')
let inp2 = document.querySelector('#num2')
let zbir = document.querySelector('#zbir')
let switchBtn = document.querySelector('#flexSwitchCheckChecked')
let btnSaberi = document.querySelector('.btn-saberi')
let calc = document.querySelector('.calculator')
let row = document.querySelector('.row')
switchBtn.addEventListener('change',function () {
    if (this.checked) {
        calc.style.visibility = 'visible';
        
    } else {
        calc.style.visibility = 'hidden';
        
    }
})
btnSaberi.addEventListener('click',saberi)

function saberi() {
    zbir.value = parseInt(inp1.value) + parseInt(inp2.value)
    let text = `
            <div class="col-2">
                <h2 class="br">${zbir.value}</h2>
            </div>`
    row.innerHTML+= text
    inp1.value = ""
    inp2.value = ""
    zbir.value = ""
}


let addBtn =  document.querySelector('.btn-success')
let tBody = document.querySelector('.tBody')
let counter = 0

addBtn.addEventListener('click',createRow)
function createRow() {
    counter++
    let text = `
    <tr>
        <th scope="row">${counter}</th>
        <td></td>
        <td></td>
        <td></td>
    </tr>`
    tBody.innerHTML+= text
}

