export default function createProductItem(name, price, image) {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    const productImage = document.createElement("img");
    productImage.classList.add("product-image");
    productImage.src = image;
    productImage.alt = name;

    const productName = document.createElement("h3");
    productName.classList.add("product-name");
    productName.textContent = name;

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    productPrice.textContent = price;

    productItem.appendChild(productImage);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);

    return productItem;
}