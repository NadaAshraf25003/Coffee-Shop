// /* single_product_sliger(+,-) start  */
// let minus=document.querySelector(".minus");
// let plus=document.querySelectorAll(".plus");
// let num=document.querySelectorAll(".num");
// let cunt=0;
// plus.forEach((add)=>{
//     add.addEventListener('click', ()=>{
//         cunt++;
//         const count=JSON.parse(localStorage.getItem("count")) || "";
//         count.push(cunt);
//         localStorage.setItem("count",JSON.stringify(count));
//         // num.forEach((add1)=>{
//         // add1.innerHTML=count;})
//         // Span_Cart.innerHTML=count;
//         Span_Cart.innerHTML=count;
//         console.log(count);
//     }) 
// })

// /* single_product_sliger(+,-) start  */
// let minus=document.querySelector(".minus");
// let plus=document.querySelectorAll(".plus");
// let num=document.querySelectorAll(".num");
// const Span_Cart=document.querySelector(".Span_Cart");
// let cunt=0;
// plus.forEach((add)=>{
//     add.addEventListener('click', ()=>{
//         cunt++;
//         localStorage.setItem("count",JSON.stringify(cunt));
//         const count=JSON.parse(localStorage.getItem("count"));
//         // count.push(cunt);
//         // num.forEach((add1)=>{
//         // add1.innerHTML=count;})
//         // Span_Cart.innerHTML=count;
//         Span_Cart.innerHTML=count;
//         console.log(count);
//     }) 
// })


// const cartBag=JSON.parse(localStorage.getItem("count"));

// minus.addEventListener('click', ()=>{
//     if(count>0){
//         count--;
//         num.innerHTML=count;
//         // Span_Cart.innerHTML=count;
//     }
// })

/* single_product_sliger(+,-) end  */


// const shopping=document.querySelector(".shopping");//cart icon
// const cart_info=document.querySelector(".cart_info table");//list 
// const listCard=document.querySelector("#cart-table"); //products in cart
// const total =document.querySelector(".total");
// const quantity =document.querySelector(".Span_Cart");

// let products=[
//     {
//         id:1,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:2,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:3,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:4,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:5,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:6,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:7,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:8,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:9,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:10,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:11,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
//     {
//         id:12,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     },
// ]

// let listCards=[
//     {
//         id:1,
//         name:"Product 1",
//         images:"/Coffee_Shop/images/product-image-2.jpg",
//         price:200,
//     }
// ];

// const addToCard=(key)=>{
//     if(listCards[key]==null){
//         listCards[key]=JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity=1;
//     }
//     relaodCard();
// }
// function relaodCard(){
//     // listCard.innerHTML="";
//     console.log("lk");
//     let count=0;
//     let totalPrice=0;
//     listCards.forEach((value,key)=>{
//         totalPrice=totalPrice+value.price;
//         count=value.quantity;

//         if(value !=null){
//             let newDiv=document.createElement("tr");
//             newDiv.innerHTML=`
//                 <td><button class="delete" onclick="del()">Delete</button></td>
//                 <td class="product-image"><img src="${value.images}" alt=""></td>
//                 <td>${value.name}</td>
//                 <td>${value.price}</td>
//                 <td>
//                     <div class="add">
//                         <button class="minus" onclick="changeQuantity(${key},${value.quantity-1})">-</button>
//                         <button class="num">${value.quantity}</button>
//                         <button class="plus" onclick="changeQuantity(${key},${value.quantity-1})">+</button>
//                     </div>
//                 </td>
//                 <td class="total">${value.price.toLocaleString()}</td>
//             `
//             listCard.appendChild(newDiv);
//         }
//         total.innerText=totalPrice.toLocaleString();
//         quantity.innerText=count;
//     })
// }
// function del(){
//     listCard.removeChild();
//     console.log(5);
// }
// const changeQuantity=(key,quantity)=>{
//     if(quantity==0){
//         delete listCards[key]
//     }
//     else{
//         listCards[key].quantity=quantity;
//         listCards[key].price=quantity*products[key].price;
//     }
//     relaodCard();
// }

const CartItems=document.querySelector("#body-cart-table");
const HeadCartTable=document.querySelector("#head-cart-table");
const update=document.querySelector(".update");
const cartFoot=document.querySelector(".cart-foot");
const empty=document.querySelector(".empty");
const arr=[];
function displayCartItems(){
    const items=JSON.parse(localStorage.getItem("cart"));
    if(items!=null && items.length>0){
        empty.classList.add('display_empty');
        HeadCartTable.innerHTML=`
        <tr>
                        <th>Delete</th>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
        `;
        update.innerHTML=`<button class="upd-btn" onclick="clearCart()">Update Cart</button>`;
        cartFoot.innerHTML=`
        <h2 id="cart-total">Cart Total</h2>
                    <div class="total-cost">
                        <p>SUB-TOTAL:  <span class="total">${total()}</span></p>
                        <P>SHIPPING:  <span>FREE SHIPPING</span></P>
                        <p>TOTAL:  <span id="cart-total2" >${total()}</span></p>
                    </div>
                    <div class="checkout">
                        <button id="checkout-btn" onclick="goToCheckout()" >Checkout</button>
                    </div>
        `;
    }
    // else {
    //     empty.classList.remove('display_empty');
    //     HeadCartTable.innerHTML="";
    //     update.innerHTML="";
    // }
    
    let a=[];
    // let a2=[];
    items.forEach((item ,idx) => {
        const cartItem=document.createElement("tr");
        cartItem.className="cart-item";
        if(a.includes(item.id)){
            console.log(5);
            // total(idx);
            // plus(idx);
            // minus(idx);
            // cartItem.num.innerHTML=(item.id).quantity+78;
            // cartItem.innerHTML=`
            // <td><button class="delete" onclick="del(${cartItem})">Delete</button></td>
            // <td class="product-image"><img src="${item.image}" alt=""></td>
            // <td>${item.title}</td>
            // <td>$${item.price*2}</td>
            // <td>
            // <div class="add">
            // <button class="minus">-</button>
            // <button class="num">${item.quantity*2}</button>
            // <button class="plus" onclick="${item.quantity+1}">+</button>
            // </div>
            // </td>
            // <td class="total">${item.price*item.quantity}</td>
            // `   
        }
        else{
            a.push(item.id);
            // if(a.includes(item.id)){quantity+=parseInt(item.quantity);console.log(typeof(quantity))}
            // console.log(quantity)
            // console.log(item.quantity)
            cartItem.innerHTML=`
            <td><button class="delete" onclick="del(${idx})">Delete</button></td>
            <td class="product-image"><img src="${item.image}" alt=""></td>
            <td>${item.title}</td>
            <td>$${item.price}</td>
            <td>
            <div class="add">
            <button class="minus" onclick="minus(${idx})">-</button>
            <button class="num">${item.quantity}</button>
            <button class="plus" onclick="plus(${idx})">+</button>
            </div>
            </td>
            <td class="total">${item.price*item.quantity}</td>
            `      

            CartItems.appendChild(cartItem);
            console.log(item.quantity);
            console.log(typeof items);
            // cin
            arr.push(cartItem);
        }
        // a2.push(item.quantity);
        // console.log("55"+item.quantity);
        
    })    
    } 
displayCartItems();
// function renderCartItems() {
//     const items = JSON.parse(localStorage.getItem("cart"));
//     const cartContainer = document.querySelector("#cart-items"); // or whatever your container is

//     // Clear the existing cart
//     cartContainer.innerHTML = "";

//     if (items && items.length > 0) {
//         items.forEach((item, idx) => {
//             const cartItemRow = document.createElement("tr");
//             cartItemRow.className = "cart-item";
//             cartItemRow.innerHTML = `
//                 <td><button class="delete" onclick="del(${idx})">Delete</button></td>
//                 <td class="product-image"><img src="${item.image}" alt="${item.title}"></td>
//                 <td>${item.title}</td>
//                 <td>$${item.price}</td>
//                 <td>
//                     <div class="add">
//                         <button class="minus" onclick="minus(${idx})">-</button>
//                         <button class="num">${item.quantity}</button>
//                         <button class="plus" onclick="plus(${idx})">+</button>
//                     </div>
//                 </td>
//                 <td class="total">${item.price * item.quantity}</td>
//             `;
//             cartContainer.appendChild(cartItemRow);
//         });
//     } else {
//         cartContainer.innerHTML = "<p>Your cart is empty!</p>";
//     }
// }
// Call renderCartItems when the page loads to display cart items
// document.addEventListener('DOMContentLoaded', function() {
//     renderCartItems();
// });
function plus(idx){
    let num=document.querySelectorAll(".num");
    let total=document.querySelectorAll(".total");
    let price=document.querySelectorAll(".price");
    let a=JSON.parse(localStorage.getItem("cart"));
    a[idx].quantity++;
    localStorage.setItem("cart",JSON.stringify(a));
    num[idx].innerHTML=a[idx].quantity;
    total[idx].innerHTML=a[idx].price*a[idx].quantity;
    // cunt2++;/
    // console.log(cunt2);
    // localStorage.setItem("count2",JSON.stringify(cunt2));
    // let Plus_count=JSON.parse(localStorage.getItem("count"));
    // console.log(Plus_count);
    // Plus_count++;
    // localStorage.setItem("count",JSON.stringify(Plus_count));
        // Update Span_Cart dynamically
        updateCartQuantity();

        // Update the total amount of the cart
        updateCartTotal();

    //      // Re-render the cart to reflect the changes
    // renderCartItems();
}


function minus(idx){
    let num=document.querySelectorAll(".num");
    let total=document.querySelectorAll(".total");
    let price=document.querySelectorAll(".price");
    let a=JSON.parse(localStorage.getItem("cart"));
    if(a[idx].quantity>1){
        a[idx].quantity--;
        localStorage.setItem("cart",JSON.stringify(a));
        num[idx].innerHTML=a[idx].quantity;
        total[idx].innerHTML=a[idx].price*a[idx].quantity;
    }
        // Update Span_Cart dynamically
        updateCartQuantity();

        // Update the total amount of the cart
        updateCartTotal();

    //      // Re-render the cart to reflect the changes
    // renderCartItems();

        
}
function del(idx) {
    let a = JSON.parse(localStorage.getItem("cart"));
    
    // Remove the item from the cart (localStorage)
    a.splice(idx, 1);  
    
    // Update the cart in localStorage
    localStorage.setItem("cart", JSON.stringify(a));
    
    // Remove the item from the DOM (index may shift after removing an item)
    let cartItemRow = document.querySelectorAll(".cart-item")[idx];
    if (cartItemRow) {
        cartItemRow.remove();  // Remove the corresponding row
    }
    
    // Update the total amount of the cart
    updateCartQuantity(); // Update the total quantity in Span_Cart
    updateCartTotal();    // Update the total price in the cart

    //  // Re-render the cart to reflect the changes
    //  renderCartItems();
}

// 1
// function del(idx){
//     let a=JSON.parse(localStorage.getItem("cart"));
//     let ID=a[idx].id;
//     console.log(ID);
//     a.splice(idx,1);
//     // console.log(a);4
//     let arr=a;
//     for(let i=0;i<a.length;i++){     
//         if(a[i].id==ID){
//             a.splice(i,1);
//             // break;
//         }
//     }
//     localStorage.setItem("cart",JSON.stringify(a));

// }
// function del(idx){
//     let a=JSON.parse(localStorage.getItem("cart"));
//     let ID=a[idx].id;
//     console.log(ID);
//     a.splice(idx,1);
//     // console.log(a);4
//     let arr=a;
//     for(let i=0;i<a.length;i++){
        
//         if(a[i].id==ID){
//             console.log("The id is ",a[i].id)
//             a.splice(a[i],1);            
//             console.log(a);
//         }   
        
//     }
//     localStorage.setItem("cart",JSON.stringify(a));
//     // displayCartItems();
// }
function total(){
    let a=JSON.parse(localStorage.getItem("cart"));
    let sum=0;
    for(let i=0;i<a.length;i++){
        sum+=a[i].price*a[i].quantity;
    }
    return sum;
}

function updateCartTotal(){
    const items = JSON.parse(localStorage.getItem("cart"));
    if (items != null && items.length > 0) {
        let totalAmount = 0;
        items.forEach(item => {
            totalAmount += item.price * item.quantity;
        });
        
        // Update the displayed total cost in the cart
        document.querySelector('.total-cost .total').innerHTML = `${totalAmount}`;
        document.querySelector('#cart-total2').innerHTML = `${totalAmount}`;
    }
    else {
        // If the cart is empty, reset the totals
        // document.querySelector('.total-cost .total').innerHTML = "$0.00";
        // document.querySelector('#cart-total2').innerHTML = "$0.00";
        empty.classList.remove('display_empty');
        HeadCartTable.innerHTML="";
        update.innerHTML="";
        cartFoot.innerHTML="";

    }
}

function updateCartQuantity() {
    const Quantities = JSON.parse(localStorage.getItem("cart"));
    let counts = 0;

    // Sum the quantities of all items in the cart
    if (Quantities != null) {
        Quantities.forEach((item) => {
            counts += item.quantity;
        });
    }

    // Update the Span_Cart innerHTML with the total quantity
    const Span_Cart = document.querySelector(".Span_Cart");
    Span_Cart.innerHTML = counts;
}

// Update the cart quantity on page load
document.addEventListener("DOMContentLoaded", () => {
    updateCartQuantity();
});


function goToCheckout() {
    // You can pass query parameters if needed, like the cart total or other data
    window.location.href = 'checkout.php';  // This will redirect the user to checkout.php
}


function clearCart() {
    // Remove all items from localStorage
    localStorage.removeItem("cart");

    // Clear the cart items table in the DOM
    const CartItems = document.getElementById("CartItems");
    CartItems.innerHTML = ""; // This clears the cart items table

    // Update the cart footer to reflect the empty cart
    const cartFoot = document.getElementById("cartFoot");
    cartFoot.innerHTML = `
        <h2 id="cart-total">Cart Total</h2>
        <div class="total-cost">
            <p>SUB-TOTAL:  <span class="total">0</span></p>
            <P>SHIPPING:  <span>FREE SHIPPING</span></P>
            <p>TOTAL:  <span id="cart-total2">0</span></p>
        </div>
        <div class="checkout">
            <button id="checkout-btn" onclick="goToCheckout()" disabled>Checkout</button>
        </div>
    `;

    // Remove the 'empty cart' message if there is one
    const empty = document.getElementById("empty");
    empty.classList.remove('display_empty');

    // Optionally, you can also remove the "Update Cart" button or disable it
    const update = document.getElementById("update");
    update.innerHTML = ""; // This removes the update button
}
