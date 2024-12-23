let landing = document.querySelector(".landing");
let leftArrow = document.querySelector(".left");
let rightArrow = document.querySelector(".right");
let videoElement = document.getElementById("background-video"); 
let images = [
    "images/133988-758552232_small.mp4",
    "images/home-1-slider.jpg",
    "images/home-1-slider-img-2.jpg", 
    "images/pexels-pixabay-260922.jpg"
];

let currentIndex = 0; 


function updateBackground() {
    if (images[currentIndex].endsWith('.mp4')) {
        // If the current item is a video
        videoElement.src = images[currentIndex];
        videoElement.style.display = "block"; // Show the video
        videoElement.play(); // Play the video
        landing.style.backgroundImage = ""; // Clear the background image
    } else {
        // If the current item is an image
        landing.style.backgroundImage =`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${images[currentIndex]})`;
        videoElement.style.display = "none"; // Hide the video
        videoElement.pause(); // Pause the video
    }
}

// Event listener for left arrow
leftArrow.addEventListener("click", function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Go to previous image
    updateBackground();
});

// Event listener for right arrow
rightArrow.addEventListener("click", function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Go to next image
    updateBackground();
});

// Initialize the background image or video
updateBackground();
// Function to automatically change the background every 5 seconds
function autoChangeBackground() {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    updateBackground();
}

// Initialize the background image or video
updateBackground();

// Set interval for automatic background change
setInterval(autoChangeBackground, 5000); // Change every 5 seconds



/* single_product_sliger(+,-) start  */
// let minus=document.querySelector(".minus");
// let plus=document.querySelector(".plus");
// let num=document.querySelector(".num");
// let ADD_TO_CART=document.querySelectorAll(".ADD_TO_CART");

// //Cart icon
// let Span_Cart=document.querySelector(".Span_Cart");

// let count=0;
// ADD_TO_CART.forEach((add)=>{
//     add.addEventListener('click', ()=>{
//     count++;
//     Span_Cart.innerHTML=count;
// })
// })

// plus.addEventListener('click', ()=>{
//     count++;
//     num.innerHTML=count;
//     Span_Cart.innerHTML=count;
// })
// minus.addEventListener('click', ()=>{
//     if(count>0){
//         count--;
//         num.innerHTML=count;
//         Span_Cart.innerHTML=count;
//     }
// })

/* single_product_sliger(+,-) end  */

// get the src of images start
const pic=document.querySelectorAll(".pic");
pic.forEach((button)=>{
    button.addEventListener("click",()=>{
        let product=button.getAttribute("data-product");
        let quantity=button.getAttribute("data-quantity");
        let Products={product,quantity};
        const ProductsItem=JSON.parse(sessionStorage.getItem("ProductsItem")) || [];
        ProductsItem.push(Products);
        sessionStorage.setItem("ProductsItem",JSON.stringify(ProductsItem));
    });
});
console.log(sessionStorage.getItem("ProductsItem"))
// get the src of images end


// Add to Cart start

function updateCartQuantity() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];  // Get cart from localStorage
    let totalQuantity = 0;

    // Sum up all quantities in the cart
    cart.forEach(item => {
        totalQuantity += item.quantity;
    });

    // Update the Span_Cart element with the total quantity
    const Span_Cart = document.querySelector(".Span_Cart");
    if (Span_Cart) {
        Span_Cart.innerHTML = totalQuantity;
    }
}


// window.onload=()=>{JSON.parse(localStorage.clear())};
const ADD_TO_CART=document.querySelectorAll(".ADD_TO_CART");
ADD_TO_CART.forEach((button)=>{
    button.addEventListener("click",()=>{
        const id=button.getAttribute("data-id");
        const title=button.getAttribute("data-title");
        const image=button.getAttribute("data-image");
        const price=button.getAttribute("data-price");
        const quantity=button.getAttribute("data-quantity");
        const cartItem={id,title,image,price,quantity};
        const cart=JSON.parse(localStorage.getItem("cart")) || [];
        const itemExists = cart.some(cartIt => cartIt.id === cartItem.id);
        if (!itemExists) {
            // If the item does not exist, add it to the cart
            cart.push(cartItem);
            console.log(cart);
            
        }
        else{
            // If the item exists, increment its quantity
            const index = cart.findIndex(cartIt => cartIt.id === cartItem.id);
            cart[index].quantity++;
            console.log("the quantity is :",cart[index].quantity);
        }
        localStorage.setItem("cart",JSON.stringify(cart));
        updateCartQuantity();
        })
});
// When the page loads, update the cart quantity in Span_Cart
document.addEventListener("DOMContentLoaded", () => {
    updateCartQuantity();
});


// Add to Cart end


// // Dark mode start 
// const DarkBtn=document.querySelector("#DarkBtn");
// const Section2=document.querySelector(".Section2");
// const Section4=document.querySelector(".Section4");
// DarkBtn.addEventListener("click",()=>{
//     Section4.classList.toggle("DarkBtn_toggle");
// })
// // Dark mode end

// // Login start 
// const User_Login=document.querySelector(".user_login");
// const user_login_logout=document.querySelector(".user_login_logout");
// User_Login.addEventListener("click",()=>{
//     user_login_logout.classList.toggle("display_login");
// })
// // Login end 

