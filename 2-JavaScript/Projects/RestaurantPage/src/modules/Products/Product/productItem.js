export default function createProductItem(name, price, image) {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    const productImageContainer = document.createElement("div");
    productImageContainer.classList.add("product-image-container");

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

    productImageContainer.appendChild(productImage);

    productItem.appendChild(productImageContainer);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);

    return productItem;
}