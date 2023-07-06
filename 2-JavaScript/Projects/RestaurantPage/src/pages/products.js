import "../css/products.css";
import bgImage from "../img/products-background.jpg";
import { addMain, clearMain } from "../index.js";
import createBanner from "../modules/Global/banner/globalBanner.js";
import createProductItem from "../modules/Products/Product/productItem";

// Products images
import espresso from "../img/products/espresso.jpg";
import latte from "../img/products/latte.jpg";

const products = [
    {
        name: "Espresso",
        price: "$15.00",
        image: espresso
    },
    {
        name: "Latte",
        price: "$15.00",
        image: latte,
    },
]

export default function createProductsPage() {
    clearMain();
    addMain(createBanner("Products", "The best quality for you", bgImage));
    const productsContainer = document.createElement("div");
    productsContainer.classList.add("products-container");
    addMain(productsContainer);

    products.forEach(product => {
        addProduct(createProductItem(product.name, product.price, product.image));
    });
}

function addProduct(product) {
    const productsContainer = document.querySelector(".products-container");
    productsContainer.appendChild(product);
}