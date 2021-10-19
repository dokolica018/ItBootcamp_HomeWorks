// ## Napraviti TODO listu

// 1. Omoguciti dodavanje elemenata na klik dugmeta (vrednost uzeta iz input-a)
//     - Dodavanje elemenata podrazumeva dodavanje na stranicu i u niz

// 2. Omoguciti brisanje elemenata na klik dugmeta iz odredjenog elementa
//     - Brisanje iz niza //indexOf i sa stranice

// Aplikacija TO-DO lista
// Zavrsiti sa casa (26.08.2021) zapocetu aplikaziju za to-do listu koja treba da poseduje sledece funkcionalnosti:
// 1. Podaci iz niza se prikazuju na stranici (lista to-do itema)
// 2. Ima formu/input za unos novih podataka (to-do itema) u niz (automatski se azurira i prikaz na stranici)
// 3. Svaki item sadrzi sledece :
//      - id
//      - opis (desc)
//      - iformaciju da li je uradjen ili ne (done)
// 4. Na stranici za svaki item se prikazuje text - opis i checkbox polje koje menja stanje itema (uradjeno-neuradjeno), 
// kao i dugme za brisanje itema. Kada je item uradjen (done == true) tekst (desc) itema se precrta (ili se na neki drugi 
// nacin naznaci da je item uradjen).

let forma = document.querySelector('#forma')
let inputText = document.querySelector('#input-text')
let addBtn = document.querySelector('.add')
let row = document.querySelector('.row')


let todos = [{
    id: 'loaded-1',
    desc: 'Kupi cigare',
    done: false
},
{
    id: 'loaded-2',
    desc: 'Nadji posao',
    done: false
},
{
    id: 'loaded-3',
    desc: 'Prosetaj psa',
    done: false
},
{
    id: 'loaded-4',
    desc: 'Uci svaki dan',
    done: false
},]
let count = 0

const addToDom = (text, id) => {
    let col3 = document.createElement('div')
    col3.classList.add('col-3', 'my-3')
    row.appendChild(col3)
    let h5Text = document.createElement('h5')
    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'delete', 'mx-4')
    let checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox')
    checkBox.classList.add("form-check-input")
    col3.append(h5Text, checkBox, deleteBtn)
    
    h5Text.innerHTML = text
    deleteBtn.innerHTML = 'delete'
    
    deleteBtn.addEventListener('click', () => {
        let index = todos.findIndex(el => el.id == id)
        todos.splice(index, 1)
        console.log(todos);
        col3.remove()
    })
    checkBox.addEventListener('change',() => {
        if (checkBox.checked) {
            todos.forEach(todo => {
                if (h5Text.innerHTML == todo.desc) {
                    h5Text.style.textDecoration = 'line-through'
                    todo.done = true
                }
            });
            
        }else{
            todos.forEach(todo => {
                if (h5Text.innerHTML == todo.desc) {
                    h5Text.style.textDecoration = 'none'
                    todo.done = false
                }
            });
            
        }
        console.log(todos);
    })
}

todos.forEach(todo => {
    addToDom(todo.desc, todo.id, todo.done)
});

forma.addEventListener('submit', (e) => {
    e.preventDefault()
    if (inputText.value != "") {
        let item = { id: count++, desc: inputText.value, done: false }
        todos.push(item)
        addToDom(item.desc, item.id, item.done)
    } else {
        alert('Please write something...')
    }
    
    
    
    console.log(todos);
    forma.reset()
})

// const searchInput = document.querySelector('#pretraga')
// searchInput.addEventListener('input', () => {
//     let fNiz = todos.filter(todo => todo.desc.includes(searchInput.value));
//     row.innerHTML = ""
//     fNiz.forEach(el => {
//         addToDom(el.desc, el.id, el.done)
        
//     });
    
    
// })