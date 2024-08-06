
//this function shows and hides search-box
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');/*when click, opens search box and closes other boxes/menus*/
    shoppingCart.classList.remove('active');/*box closes when clicking on search box icon*/
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
//this fucntion shows and hides shopping cart
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
//this function shows and hides login box
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}
//this fucntion shows and hides website menu(navbar)(only when screen is smaller)
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}


// when scrolling, open boxes/menus will hide
window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}

//function that applies the swipe function (video 18). this code has been modified
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});




let totalAmount = 18.98; // Initial total amount

// Select all "Add to Cart" buttons
let addToCartButtons = document.querySelectorAll('.btn');

// Loop through each button and add an event listener
addToCartButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        // Prevent the default behavior of the link
        event.preventDefault();

        // Get the product ID from the data-product-id attribute
        let productId = button.parentElement.getAttribute('data-product-id');

        // Get the product details based on the product ID
        let product = document.querySelector(`.swiper-slide[data-product-id="${productId}"]`);

        // Extract product details
        let productName = product.querySelector('h1').innerText;
        let productPrice = parseFloat(product.querySelector('.price').innerText.replace('$', ''));


        // Update the shopping cart HTML with the new item
        shoppingCart.innerHTML += `
        <div class="box">
            <i class="fa-regular fa-trash-can"></i>
            <img src="image/cart-img-${productId}.png" width="125" height="150">
            <div class="content">
                <h3>${productName}</h3>
                <span class="price"> $${productPrice.toFixed(2)}/-</span>
                <span class="quantity">Qty: 1</span>
            </div>
        </div>
    `;

        // Update the total amount
        totalAmount += productPrice;
        document.querySelector('.total').innerText = `total: $${totalAmount.toFixed(2)}`;
    });
});

// Toggle the shopping cart on button click
document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};