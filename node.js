const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });

    fs.readFile('index.html', function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error: File Not Found');
        } else {
            res.write(data);
        }

        res.end();
    });
});

server.listen(port, function (error) {
    if (error) {
        console.log('something went wrong', error);
    } else {
        console.log('server is listening on port ' + port);
    }
});










document.addEventListener("DOMContentLoaded", function () {
    // Get all "Add to Cart" buttons
    var addToCartButtons = document.querySelectorAll(".add-to-cart");

    // Add click event listener to each button
    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            // Get the product ID from the data attribute
            var productId = button.closest(".box").getAttribute("data-product-id");

            // Call a function to add the product to the cart
            addToCart(productId);
        });
    });

    // Function to add the product to the cart
    function addToCart(productId) {
        // Retrieve the product details based on the productId
        // You can use AJAX to fetch product details from the server

        // For demonstration purposes, let's assume the product details
        // and price are hard-coded here
        var productName = "Product Name";
        var productPrice = 10.99;

        // Create a new cart item HTML
        var cartItemHTML = `
            <div class="box">
                <i class="fa-regular fa-trash-can"></i>
                <img src="image/product-image.png" width="125" height="150">
                <div class="content">
                    <h3>${productName}</h3>
                    <span class="price">$${productPrice}/-</span>
                    <span class="quantity">Qty: 1</span>
                </div>
            </div>
        `;

        // Append the new cart item to the shopping cart
        var shoppingCart = document.querySelector(".shopping-cart");
        shoppingCart.insertAdjacentHTML("beforeend", cartItemHTML);
    }
});