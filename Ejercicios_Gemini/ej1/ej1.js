"use strict"
{

const productosDisponibles = [
    { nombre: "Manzana", precio: 1.50 },
    { nombre: "Naranja", precio: 0.80 },
    { nombre: "Plátano", precio: 2.10 },
    { nombre: "Uva", precio: 3.50 },
    { nombre: "Pera", precio: 1.25 }
];

let cartTitle = document.createElement("h2");
cartTitle.textContent = "Shopping cart: ";

let cart = document.createElement("ul");

document.body.appendChild(cartTitle);
cartTitle.insertAdjacentElement("afterend", cart);

let h2 = document.createElement("h2");
h2.textContent = "Available products: ";
cartTitle.insertAdjacentElement("beforebegin", h2);

let productsUl = document.createElement("ul");

productosDisponibles.forEach(product => {
    let li = document.createElement("li");
    li.textContent = product["nombre"] + ": " + product["precio"] + "$ ";

    let button = document.createElement("button");
    button.textContent = "Add";
    button.value = product['nombre'];

    button.addEventListener("click", () => {
        let checkIsAdded = document.querySelector(`#id${product['nombre']}`);
        if (checkIsAdded){
            let addQuantity = document.querySelector(`#idQuantity${product['nombre']}`);
            console.log(addQuantity);
            addQuantity.textContent = parseInt(addQuantity.textContent) + 1;
        }else{
            let addProduct = document.createElement("li");
            addProduct.id = `id${product['nombre']}`;
            addProduct.textContent = product['nombre'];

            let quantity = document.createElement("p");
            quantity.textContent = 1;
            quantity.id = `idQuantity${product['nombre']}`;
            addProduct.appendChild(quantity);

            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            addProduct.appendChild(deleteButton);

            cart.appendChild(addProduct);

            deleteButton.addEventListener("click", () => {
                addProduct.remove();
            });

        }
    })

    li.appendChild(button);

    productsUl.appendChild(li);
});



h2.insertAdjacentElement("afterend", productsUl);

}