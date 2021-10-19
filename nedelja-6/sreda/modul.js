// 1. Korisnik unosi username i password i na klik Login dugmeta se kreira objekat klase Kupac.
// Klasa kupac sadrzi ime ,sifru i korpu .
// Div cart se prikazuje tek kada se korisnik ulogovao.

// 2. Na stranici su sve vreme izlistani svi dostupni proizvodi iz niza proizvoda kreiranih klasom Proizvod

// jedan proizvod treba da sadrzi naziv , cenu , dostupnu kolicinu 

// proizvod moze biti prehrambeni ili bela tehnika

// ako je bela tehnika ima i garanciju

// ako je prehrambeni ima rok trajanja

// 3. Korisnik moze da doda proizvod u korpu , ako unese kolicinu vecu od dostupne kolicine ispisati poruku o gresci 
// Proizvod iz korpe moze da se obrise klikom na dugme Obrisi iz korpe

// DODATNO , NE MORA:
// 4. Ako je korisnik admin moze da doda nov proizvod


let usernameDom = document.querySelector('.usernameK')
let proizvodiHrana = document.querySelector('.proizvodiHrana')
let proizvodiTehnika = document.querySelector('.proizvodiTehnika')

// let buyers = []

export class Product{
    productName
    price
    quantity
    constructor(productName,price,quantity) {
        this.productName = productName
        this.price = price
        this.quantity = quantity
    }
    get productName(){
        return this.productName
    }
    get price(){
        return this.price
    }
    get quantity(){
        return this.quantity
    }
    set productName(productName){
        this.productName = productName
    }
    set price(price){
        this.price = price
    }
    set quantity(quantity){
        this.quantity = quantity
    }
    
}

export class Grocery extends Product{
    goodUntil
    constructor(productName,price,quantity,goodUntil) {
        super(productName,price,quantity)
        this.goodUntil = goodUntil
    }
    get goodUntil(){
        return this.goodUntil
    }
    set goodUntil(goodUntil){
        this.goodUntil = goodUntil
    }
}
export class Appliance extends Product{
    warranty
    constructor(productName,price,quantity,warranty) {
        super(productName,price,quantity)
        this.warranty = warranty
    }
    get warranty(){
        return this.warranty
    }
    set warranty(warranty){
        this.warranty = warranty
    }
}

export class Buyer{
    username
    password
    constructor(username,password) {
        this.username = username
        this.password = password
        this.cart = []
    }
    get username(){
        return this.username
    }
    get password(){
        return this.password
    }
    set username(username){
        this.username = username
    }
    set password(password){
        this.password = password
    }
    addUsername(){
        usernameDom.innerHTML = this.username
    }
    addToCart(itemBought){
        this.cart.push(itemBought)
        console.log(this.cart);
    }
}
export class List{
    groceries
    appliances
    constructor() {
        this.groceries = []
        this.appliances = []
    }
    addToList(item){
        if (item instanceof Grocery) {
            this.groceries.push(item)
        } else if(item instanceof Appliance) {
            this.appliances.push(item)
        }
    }
    addToDom(){
        this.groceries.forEach(gr => {
            proizvodiHrana.innerHTML+=`
                <div class="proizvod col-3 my-4">
                    <p><span>Naziv:</span> ${gr.productName}</p>
                    <p class="kolicinaK"><span>Kolicina:</span><p class="kolicina"> ${gr.quantity}</p></p>
                    <p class="cenaK"><span>Cena:</span><p class="cena"> ${gr.price}</p></p>
                    <p><span>Rok trajanja:</span> ${gr.goodUntil}</p>
                    <input class="form-control" type="number" id="kolicina" style="width: 177px;" placeholder="kolicina">
                    <button class="btn btn-warning btn-sm my-2 add">Dodaj u korpu <i class="fas fa-shopping-cart"></i></button>
                </div>
            `
            
            
        });
        this.appliances.forEach(app => {
            proizvodiTehnika.innerHTML+=`
                <div class="proizvod col-3 my-4">
                    <p><span>Naziv:</span> ${app.productName}</p>
                    <p class="kolicinaK"><span>Kolicina:</span><p class="kolicina"> ${app.quantity}</p></p>
                    <p class="cenaK"><span>Cena:</span><p class="cena"> ${app.price}</p></p>
                    <p><span>Garancija:</span> ${app.warranty}</p>
                    <input class="form-control" type="number" id="kolicina" style="width: 177px;" placeholder="kolicina">
                    <button class="btn btn-warning btn-sm my-2 add">Dodaj u korpu <i class="fas fa-shopping-cart"></i></button>
                </div>
            `
        });
    }
}





