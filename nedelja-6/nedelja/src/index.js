import {
    ProductGroup,
    Product,
    Checkout,
    ShoppingCart,
} from "./model.js";
let count = 1000;
let id = 0

let accesories = new ProductGroup('Accesories', 18);
let mobileTablets = new ProductGroup('Mobiles & Tablets', 20);
let computers = new ProductGroup('Computer', 25);
let laptops = new ProductGroup('Laptop', 15);
let mouses = new ProductGroup('Mouse', 10);
let smartWatches = new ProductGroup('Smart watch', 12)

let router = new Product(accesories, ++count, 'Wireless Router', '../img/pop1.jpg', 'Intenet ruter', 1200, )
let lamp = new Product(accesories, ++count, 'Philips Lamp', '../img/pop2.jpg', 'Philipsova sijalica', 700,)
let mobilni1 = new Product(mobileTablets, ++count, 'Samsung 1', '../img/mobilni-telefon-samsung-2.png', 'Manji Samsung',70000)
let mobilni2 = new Product(mobileTablets,++count, 'Samsung 2', '../img/mobilni-telefon-samsung-3.jpg', 'Veci Samsung', 12000,)
let comp1 = new Product(computers, ++count, 'Comp 4', '../img/kompjuter-4.jpg','Jedan povoljan kompjuter', 76512)
let comp2 = new Product(computers, ++count, 'Comp 5', '../img/kompjuter-5.png','Veliki i skupi kompjuter',212000)
let mouse1 = new Product(mouses, ++count, 'Mis 1 ', '../img/mis-1.jpg','Desktop Mouse',2212)
let laptop1 = new Product(laptops, ++count, 'Laptop 3 ', '../img/laptop-3.png','Mnogo lep laptop',72000)
let sw1 = new Product(smartWatches, ++count, 'Smart watch 5 ', '../img/smart-watch-5.jpg','Smart watch',1200)
let sw2 = new Product(smartWatches, ++count, 'Smart watch 6 ', '../img/smart-watch-6.jpg','Povoljno!',7000)
let cart = new ShoppingCart();

cart.addProduct(router, 1);
cart.addProduct(lamp, 4);
cart.addProduct(mobilni1, 2);
cart.addProduct(mobilni2, 1);
cart.addProduct(comp1, 3);
cart.addProduct(comp2, 1);
cart.addProduct(mouse1, 5);
cart.addProduct(laptop1, 5);
cart.addProduct(sw1, 3);
cart.addProduct(sw2, 3);



let bill = new Checkout();
bill.printCheck(cart);