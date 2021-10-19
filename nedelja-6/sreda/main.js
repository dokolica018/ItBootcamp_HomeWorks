import { Buyer, Grocery, Appliance, List } from './modul.js';
let userInp = document.querySelector('#username')
let passInp = document.querySelector('#password')
let form = document.querySelector('#forma')

let kupljeno = document.querySelector('.kupljeno')
let korpa = document.querySelector('.korpa')

let alert = document.querySelector('.alert')
let alertText = document.querySelector('.alertText')
let btnAlert = document.querySelector('.btnAlert')

btnAlert.addEventListener('click',() => {
    alert.style.display = 'none'
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (userInp.value !="" || passInp.value !="") {
        let buyer = new Buyer(userInp.value, passInp.value)
        buyer.addUsername()
        korpa.style.display = 'block'
    } else {
        alert.style.display = 'block'
        alertText.innerHTML = 'Uloguj se prvo !?!'
    }
})

let grocery1 = new Grocery('Sir','600 din','30 kom','30.9.2021')
let grocery2 = new Grocery('Jaja','20 din','70 kom','20.9.2021')
let grocery3 = new Grocery('Meso','730 din','90 kom','12.9.2021')
let grocery4 = new Grocery('Mleko','130 din','50 kom','20.10.2021')

let appliance1 = new Appliance('Sporet','30600 din','15 kom','5 godina')
let appliance2 = new Appliance('Ves masina','23700 din','10 kom','3 godine')
let appliance3 = new Appliance('Susilica za ves','29000 din','12 kom','2 godine')
let appliance4 = new Appliance('Frizider','42000 din','6 kom','10 godina')

const itemList = new List();

itemList.addToList(grocery1)
itemList.addToList(grocery2)
itemList.addToList(grocery3)
itemList.addToList(grocery4)
itemList.addToList(appliance1)
itemList.addToList(appliance2)
itemList.addToList(appliance3)
itemList.addToList(appliance4)

itemList.addToDom()
let addInp = document.querySelectorAll('#kolicina')
let addBtn = document.querySelectorAll('.add')
let kolicine = document.querySelectorAll('.kolicina')
let cene = document.querySelectorAll('.cena')

addBtn.forEach((add,index) => {
    add.addEventListener('click',() => {
        if (addInp[index].value != "") {
            if (parseInt(kolicine[index].innerHTML)>=parseInt(addInp[index].value)) {
                // console.log(parseInt(addInp[index].value));
                // console.log(parseInt(kolicine[index].innerHTML));
                let col3 = document.createElement('div')
                col3.classList.add('col-3')
                col3.innerHTML =  add.parentNode.innerHTML
                kupljeno.append(col3)
                let addInpK = document.querySelector('#kolicina')
                let addBtnK = document.querySelector('.add')
                let cena = document.querySelector('.cena')
                let kolicina = document.querySelector('.kolicina')
                let cenaK = document.querySelector('.cenaK')
                let kolicinaK = document.querySelector('.kolicinaK')
                cenaK.remove()
                kolicinaK.remove()
                cena.remove()
                kolicina.remove()
                addInpK.remove()
                addBtnK.remove()
                
                let newKolicina = document.createElement('p')
                let  newKolSpan = document.createElement('span')
                newKolSpan.innerHTML = 'Kolicina:'
                let kolicinaInsideP = document.createElement('p')
                kolicinaInsideP.innerHTML = parseInt(addInp[index].value)+'kom'
                newKolicina.append(newKolSpan,kolicinaInsideP)
                
                let newCena = document.createElement('p')
                let  newCenSpan = document.createElement('span')
                newCenSpan.innerHTML = 'Cena:'
                let cenaInsideP = document.createElement('p')
                cenaInsideP.innerHTML =`${parseInt(addInp[index].value)} * ${parseInt(cene[index].innerHTML)} = ${parseInt(addInp[index].value)*parseInt(cene[index].innerHTML)} din`
                newCena.append(newCenSpan,cenaInsideP)
                
                kolicine[index].innerHTML = parseInt(kolicine[index].innerHTML)-parseInt(addInp[index].value)+'kom'

                
                let deleteBtn = document.createElement('button')
                deleteBtn.classList.add('btn','btn-danger','btn-sm')
                deleteBtn.innerHTML = 'Delete'
                col3.append(newKolicina,newCena,deleteBtn)
                let val = addInp[index].value
                addInp[index].value = ""
                deleteBtn.addEventListener('click',() => {
                    deleteBtn.parentElement.remove()
                    kolicine[index].innerHTML=parseInt(kolicine[index].innerHTML)+parseInt(val)+'kom'
                })
            }else  if (parseInt(kolicine[index].innerHTML)<parseInt(addInp[index].value)){
                alert.style.display = 'block'
                alertText.innerHTML = 'Nemamo tolko !?!'
            }
        }else{
            alert.style.display = 'block'
            alertText.innerHTML = 'Kazi kolko !?!'
        }
        
    })
});

