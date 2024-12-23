/* Additional information start     */
let add1=document.querySelector(".span1");
let add2=document.querySelector(".span2");
let description_info =document.querySelector(".description_info");
let add_table =document.querySelector(".add_table");

let span1=document.querySelector(".span1");
let span2=document.querySelector(".span2");
add1.addEventListener("click" ,()=>{
    description_info.classList.add("displayed");
    description_info.classList.remove("hidden");
    add_table.classList.add("hidden");
    span1.classList.add("hover");
    span2.classList.remove("hover");
})
add2.addEventListener("click" ,()=>{
    add_table.classList.add("displayed");
    add_table.classList.remove("hidden");
    description_info.classList.add("hidden");
    span2.classList.add("hover");
    span1.classList.remove("hover");
})
/* Additional information end     */

// secondFile.js
const numElements = document.querySelectorAll(".num");
const minusButtons = document.querySelectorAll(".minus");
const plusButtons = document.querySelectorAll(".plus");
document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons for plus, minus, and num

    minusButtons.forEach((minus, idx) => {
        // For each "minus" button, attach an event listener
        minus.addEventListener('click', () => {
            let count = parseInt(numElements[idx].innerHTML);
            if (count > 0) {
                count--; // Decrease count
                numElements[idx].innerHTML = count; // Update the display
                updateCartQuantity(); // Update total cart quantity
                // updateCartTotal(); // Update the total price
            }
        });
    });

    plusButtons.forEach((plus, idx) => {
        // For each "plus" button, attach an event listener
        plus.addEventListener('click', () => {
            let count = parseInt(numElements[idx].innerHTML);
            count++; // Increase count
            numElements[idx].innerHTML = count; // Update the display
            updateCartQuantity(); // Update total cart quantity
            // updateCartTotal(); // Update the total price
        });
    });

    // Helper function to update cart total quantity
    // function updateCartQuantity() {
    //     let totalQuantity = 0;
    //     numElements.forEach(num => {
    //         totalQuantity += parseInt(num.innerHTML); // Sum up all quantities
    //     });

    //     // Update the cart icon with the total quantity
    //     const spanCart = document.querySelector(".Span_Cart");
    //     if (spanCart) {
    //         spanCart.innerHTML = totalQuantity;
    //     }
    // }

    // Helper function to update total price (if needed)
    // function updateCartTotal() {
    //     let totalAmount = 0;
    //     numElements.forEach((num, idx) => {
    //         let price = parseInt(num.closest('.cart-item').getAttribute("data-price")); // Assuming each item has a data-price attribute
    //         totalAmount += price * parseInt(num.innerHTML); // Multiply price by the quantity and sum
    //     });

    //     // Update total cost display
    //     const cartTotal = document.querySelector("#cart-total");
    //     if (cartTotal) {
    //         cartTotal.innerHTML = `$${totalAmount.toFixed(2)}`;
    //     }
    // }
});



// change the src of images start
const single_image=document.querySelectorAll(".single_image");
let name=document.querySelector(".name");
let new_price=document.querySelector(".new");
const ProductContain=JSON.parse(localStorage.getItem("ProductsItem"));
function src_of_img(){
ProductContain.forEach(item => {
   if(item.product==1){
        single_image.forEach((button)=>{
        button.src="../images/product-image-1.jpg"});
        name.innerHTML="Paper Pouch";
        new_price.innerHTML="$46.00";
        image="../images/product-image-1.jpg";
        id="1";
        title="Paper Pouch";
        price="46.00";
        quantity=1;
   }
   else if(item.product==2){
        single_image.forEach((button)=>{
        button.src="../images/product-image-2.jpg"});
        name.innerHTML="Paper Bag";
        new_price.innerHTML="$79.00";
        image="../images/product-image-2.jpg";
        id="2";
        title="Paper Bag";
        price="79.00";
        quantity=1;
   }
   else if(item.product==3){
        single_image.forEach((button)=>{
        button.src="../images/product-image-3-633x633.jpg"});
        name.innerHTML="Paper Pouch";
        new_price.innerHTML="$27.00";
        image="../images/product-image-3-633x633.jpg";
        id="3";
        title="Paper Pouch";
        price="27.00";
        quantity=1;
   }
   else if(item.product==4){
        single_image.forEach((button)=>{
        button.src="../images/product-image-4-633x633.jpg"});
        name.innerHTML="Coffee Pot";
        new_price.innerHTML="$71.00";
        image="../images/product-image-4-633x633.jpg";
        id="4";
        title="Coffee Pot";
        price="71.00";
        quantity=1;
   }
   else if(item.product==5){
        single_image.forEach((button)=>{
        button.src="../images/product-image-7-1-550x550.jpg"});
        name.innerHTML="Choco Bites";
        new_price.innerHTML="$54.00";
        image="../images/product-image-7-1-550x550.jpg";
        id="5";
        title="Choco Bites";
        price="54.00";
        quantity=1;
   }
   else if(item.product==6){
        single_image.forEach((button)=>{
        button.src="../images/product-image-6-633x633.jpg"});
        name.innerHTML="Paper Cup";
        new_price.innerHTML="$31.00";
        image="../images/product-image-6-633x633.jpg";
        id="6";
        title="Paper Cup";
        price="31.00";
        quantity=1;
   }
   else if(item.product==7){
        single_image.forEach((button)=>{
        button.src="../images/product-image-8-1-633x633.jpg"});
        name.innerHTML="Ground Coffee";
        new_price.innerHTML="$63.00";
        image="../images/product-image-8-1-633x633.jpg";
        id="7";
        title="Ground Coffee";
        price="63.00";
        quantity=1;
   }
   else if(item.product==8){
        single_image.forEach((button)=>{
        button.src="../images/product-image-9-1-633x633.jpg"});
        name.innerHTML="Moka Pot";
        new_price.innerHTML="$75.00";
        image="../images/product-image-9-1-633x633.jpg";
        id="8";
        title="Moka Pot";
        price="75.00";
        quantity=1;
   }
   else if(item.product==9){
        single_image.forEach((button)=>{
        button.src="../images/product-image-10-1-633x633.jpg"});
        name.innerHTML="Cafe Bags";
        new_price.innerHTML="$18.00";
        image="../images/product-image-10-1-633x633.jpg";
        id="9";
        title="Cafe Bags";
        price="18.00";
        quantity=1;
   }
   else if(item.product==10){
        single_image.forEach((button)=>{
        button.src="../images/product-image-11-1-633x633.jpg"});
        name.innerHTML="Tea Pot";
        new_price.innerHTML="$26.00";
        image="../images/product-image-11-1-633x633.jpg";
        id="10";
        title="Tea Pot";
        price="26.00";
        quantity=1;
   }
   else if(item.product==11){
        single_image.forEach((button)=>{
        button.src="../images/product5.jpg"});
        name.innerHTML="Paper Pouch";
        new_price.innerHTML="$46.00";
        image="../images/product5.jpg";
        id="11";
        title="Paper Pouch";
        price="46.00";
        quantity=1;
   }
   else{
        single_image.forEach((button)=>{
        button.src="../images/product-image-12-633x633.jpg"});
        name.innerHTML="Recycled Bags";
        new_price.innerHTML="$22.00";
        image="../images/product-image-12-633x633.jpg";
        id="12";
        title="Recycled Bags";
        price="22.00";
        quantity=1;
   }
   
    
})
return{id,title,image,price,quantity}}
src_of_img();

// change the src of images end
// let cunt=0;
// // plus.forEach((add)=>{
//     function del(){
//     // add.addEventListener('click', ()=>{
//         cunt++;
//         // localStorage.setItem("Products_Item",JSON.stringify(Products_Item));
//         const count=JSON.parse(localStorage.getItem("Products_Item"));
//         // console.log((JSON.parse(localStorage.getItem("cart"))[0].quantity)+1);
//         // return JSON.parse(localStorage.getItem("cart"))[0].quantity+1;
//         // count.push(cunt);
//         // num.forEach((add1)=>{
//         // add1.innerHTML=count;})
//         // Span_Cart.innerHTML=count;
//         console.log(JSON.parse(localStorage.getItem("Products_Item")));
//         Span_Cart.innerHTML=count;
//         // console.log(count);
//         }
//     // }) }
// // })

// del();

// Add to Cart start

function updateCartQuantity() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];  // Get cart from localStorage
    let totalQuantity = 0;

    // Sum up all quantities in the cart
    cart.forEach(item => {
        totalQuantity += item.quantity;
    });

    // let totalQuantity = 0;
        numElements.forEach(num => {
            totalQuantity += parseInt(num.innerHTML); // Sum up all quantities
        });


    // Update the Span_Cart element with the total quantity
    const Span_Cart = document.querySelector(".Span_Cart");
    if (Span_Cart) {
        Span_Cart.innerHTML = totalQuantity;
    }
}


// window.onload=()=>{JSON.parse(localStorage.clear())}
const ADD_TO_CART=document.querySelectorAll(".add_to_cart");
ADD_TO_CART.forEach((button)=>{
    button.addEventListener("click",()=>{
     //    const id=button.getAttribute("data-id");
     //    const title=button.getAttribute("data-title");
     //    const image=button.getAttribute("data-image");
     //    const price=button.getAttribute("data-price");
     //    const quantity=button.getAttribute("data-quantity");
        const cartItem=src_of_img();
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


// Add to Cart end

// console.log(cart)
const ADD_TO_CART2=document.querySelectorAll(".ADD_TO_CART");
ADD_TO_CART2.forEach((button)=>{
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
            // console.log(cart);
            
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



// get the src of images start
const pic=document.querySelectorAll(".pic");
pic.forEach((button)=>{
    button.addEventListener("click",()=>{
        let product=button.getAttribute("data-product");
        let quantity=button.getAttribute("data-quantity");
        let Products={product,quantity};
        const ProductsItem=JSON.parse(localStorage.getItem("ProductsItem")) || [];
        ProductsItem.push(Products);
        localStorage.setItem("ProductsItem",JSON.stringify(ProductsItem));
    });
});
// console.log(localStorage.getItem("ProductsItem"))
// get the src of images end
