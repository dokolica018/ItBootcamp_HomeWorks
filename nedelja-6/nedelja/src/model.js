export class ProductGroup {
    #title;
    #vat;
    constructor(title, vat) {
        this.#title = title;
        this.#vat = vat;
    }
    get vat() {
        return this.#vat;
    }

    get title() {
        return this.#title;
    }

    set title(title) {
        this.#title = title;
    }

    set vat(vat) {
        this.#vat = vat;
    }
}

export class Product {
    #barCode;
    #title;
    #price;
    group;
    shortDescription
    image
    constructor(group, barCode, title, image, shortDescription, price, ) {
        if (
            parseInt(barCode) != NaN &&
            parseInt(barCode) > 0 &&
            title.trim() !== "" &&
            parseInt(price) != NaN &&
            parseInt(price) > 0
        );
        this.#barCode = Math.ceil(parseInt(barCode));
        this.#title = title;
        this.#price = parseInt(price);
        this.shortDescription = shortDescription
        this.image = image
        this.group = group;
    }
    get barCode() {
        return this.#barCode;
    }
    get shortDescription() {
        return this.shortDescription;
    }
    get barCode() {
        return this.#barCode;
    }
    get image(){
        return this.image
    }

    get title() {
        return this.#title;
    }

    get price() {
        return this.#price;
    }

    set barCode(barCode) {
        if (parseInt(barCode != NaN && parseInt(barCode) > 0)) this.#barCode = barCode;
    }

    set title(title) {
        if (title.trim() !== "") this.#title = title;
    }

    set price(price) {
        if (parseInt(price) != NaN && parseInt(price) > 0) this.#price = price;
    }

    set image(image) {
        this.image = image;
    }
    set shortDescription(shortDescription) {
        this.shortDescription = shortDescription;
    }
    set group(group) {
        this.group = group;
    }
}

export class ShopppingCartItem {
    #product;
    #quantity;
    constructor(product, quantity) {
        this.#product = product;
        this.#quantity = quantity;
    }
    get product() {
        return this.#product;
    }
    get quantity() {
        return this.#quantity;
    }
    set product(product) {
        this.#product = product;
    }

    set quantity(quantity) {
        this.#quantity = quantity;
    }
}

export class ShoppingCart {
    items;
    constructor() {
        this.items = [];
    }
    addProduct(product, quantity = 1) {
        let item = this.items.find((prod) => product.title == prod.product.title);
        if (!item) {
            this.items.push(new ShopppingCartItem(product, quantity));
        } else {
            item.quantity += quantity;
        }
    }
}


export class Checkout {
    printCheck(shoppingCart) {
        const container = document.querySelector(".container");
        const tbody = document.querySelector(".tbody");
        shoppingCart.items.forEach((item) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${item.product.group.title}</td>
            <td>${item.product.title}</td>
            <td><img src="${item.product.image}" alt="muljo"></td>
            <td>${item.product.barCode}</td>
            <td>${item.product.shortDescription}</td>
            <td>${item.product.price}</td>
            <td>${item.quantity}</td>
            <td>${item.product.group.vat}</td>
            <td>${item.quantity * item.product.price}</td>
            `;
            tbody.append(tr);
        });
        let totalVat = shoppingCart.items.reduce((sum, item) => {
            return (
                sum +
                (item.product.group.vat / 100) * (item.quantity * item.product.price)
            );
        }, 0);
        let total = shoppingCart.items.reduce((sum, item) => {
            return (
                sum +
                (1 + item.product.group.vat / 100) *
                (item.quantity * item.product.price)
            );
        }, 0);
        const pTotal = document.createElement("p");
        pTotal.classList.add('my-3', 'fw-bold')
        pTotal.textContent = `VAT/TOTAL          ${totalVat}/${total} din`;
        container.append(pTotal);
    }
}