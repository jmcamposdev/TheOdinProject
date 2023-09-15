import "../css/products.css";
import bgImage from "../img/products-background.jpg";
import { addMain, clearMain } from "../index.js";
import createBanner from "../modules/Global/banner/globalBanner.js";
import createProductItem from "../modules/Products/Product/productItem";

// Products images
import espresso from "../img/products/espresso.jpg";
import latte from "../img/products/latte.jpg";
import cappuccino from "../img/products/cappuccino.jpg";
import mocha from "../img/products/mocha.jpg";
import americano from "../img/products/americano.jpg";
import macchiato from "../img/products/macchiato.webp";
import cortado from "../img/products/cortado.webp";
import frappe from "../img/products/frappe.jpg";

const products = [
    {
        name: "Espresso",
        price: "$2.50",
        image: espresso
    },
    {
        name: "Latte",
        price: "$3.50",
        image: latte,
    },
    {
        name: "Cappuccino",
        price: "$3.00",
        image: cappuccino,
    },
    {
        name: "Mocha",
        price: "$4.00",
        image: mocha,
    },
    {
        name: "Americano",
        price: "$2.75",
        image: americano,
    },
    {
        name: "Macchiato",
        price: "$3.25",
        image: macchiato
        ,
    },
    {
        name: "Cortado",
        price: "$3.25",
        image: cortado,
    },
    {
        name: "Frappé",
        price: "$4.50",
        image: frappe,
    },
]

export default function createProductsPage() {
    clearMain();
    addMain(createBanner("Products", "The best quality for you", bgImage));
    addMain(createProductContainer());
    products.forEach(product => {
        addProduct(createProductItem(product.name, product.price, product.image));
    });
}

function addProduct(product) {
    const productsContainer = document.querySelector(".products .container");
    productsContainer.appendChild(product);
}

function createProductContainer() {
    const productContainer = document.createElement("div");
    productContainer.classList.add("products");

    const productsContent = document.createElement("div");
    productsContent.classList.add("container");

    productContainer.appendChild(productsContent);

    return productContainer;
}