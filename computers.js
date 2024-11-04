// Import the JSON file if supported (or fetch it dynamically if running locally)
import Computer from "./Api/computers.json" assert {type: "json"};

// Container for storing products
let products = [...Computer]; // Copy the imported JSON data

// Function to render products based on the current list
function displayProducts(productList) {
    const productContainer = document.getElementById("productContainer");
    const template = document.getElementById("productTemplate");

    // Clear previous products
    productContainer.innerHTML = "";

    // Loop through each product and render it
    productList.forEach(product => {
        const productElement = template.content.cloneNode(true);

        productElement.querySelector(".productImage").src = product.image;
        productElement.querySelector(".productName").textContent = product.name;
        productElement.querySelector(".productDescription").textContent = product.description;
        productElement.querySelector(".productPrice").textContent = `₹${product.price}`;
        productElement.querySelector(".productStock").textContent = product.stock;
        productElement.querySelector(".category").textContent = product.category || "General";

        productContainer.appendChild(productElement);
    });
}

// Function to sort products based on selection
function sortProducts() {
    const sortOrder = document.getElementById("select").value;

    const sortedProducts = [...products].sort((a, b) => {
        return sortOrder === "lowToHigh" ? a.price - b.price : b.price - a.price;
    });

    // Display the sorted products
    displayProducts(sortedProducts);
}

// Event listener to sort when dropdown value changes
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("select").addEventListener("change", sortProducts);

    // Initial display of products without sorting
    displayProducts(products);
});
