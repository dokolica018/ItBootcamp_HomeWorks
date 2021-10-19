let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]


let selectDino = document.querySelector('#select-dino')
selectDino.innerHTML = `
<option value="10" selected="selected" disabled>Izaberi dinosaurusa</option>
`
dinos.forEach((dino,i) => {
                selectDino.innerHTML+=`
                <option class="dinos" id="${i}" value="${i}">${dino.name}</option>
                `
});

let kupacInput = document.querySelector('#kupac')
let napomenaInput = document.querySelector('.textarea-field')
let naruciBtn = document.querySelector('#naruci')
let itemContainer = document.querySelector('#item-container')
let allSelect = document.querySelectorAll('.dinos') 

let nizPorudzbina = []

naruciBtn.addEventListener('click',(e) => {
    e.preventDefault()
    if (kupacInput.value.length >= 4 && kupacInput.value != "    ") {
        
        for (let i = 0; i < dinos.length; i++) {
            const dino = dinos[i];
            if (selectDino.value == i) {
                let text = `
    <div class="item">
                <img src="${dino.img}" alt="">
                <p><span>Купац:</span>${kupacInput.value}</p>
                <p><span>Напомена:</span>${napomenaInput.value}</p>
                <p><span>Диносаурус: </span>${dino.name}</p>
                <p><span>Цена: </span> ${dino.cena}</p>
                <p><button class="deleteBTN">Обриши</button></p>
            </div>
    `
                itemContainer.innerHTML+=text
                if (napomenaInput.value = "") {
                    napomenaInput.value = '/'
                }
    
                let porudzbina = {
                    izabraniDino : dino.name,
                    kupac: kupacInput.value,
                    napomena : napomenaInput.value,
                    cena : dino.cena+"RSD"
                }
                nizPorudzbina.push(porudzbina)
    
                let item = document.querySelectorAll('.item')
                let deleteBtns = document.querySelectorAll('.deleteBTN')
                deleteBtns.forEach(db => {
                    db.addEventListener('click',() => {
                        db.parentElement.parentElement.remove()
                        nizPorudzbina.splice(nizPorudzbina.indexOf(porudzbina),1)
                        console.log(nizPorudzbina);
                        
                    })
                });
            }
            
        }
        
    } else {
        alert('Ime kupca mora da sadrzi barem 4 karaktera, zao nam je ako se zovete Ana ili Aca')
    }
    
})

let ispisi = document.querySelector('#btn-all')
ispisi.addEventListener('click',() => {
    nizPorudzbina.forEach(element => {
        console.log(element)
    });
})