// ----------------------------------------------------------//
let filterItem =document.querySelector('.item_list');
let filterImages= document.querySelectorAll('.product-img');
let container =document.getElementsByClassName('.container');

window.addEventListener('load' ,()=>{
    filterItem.addEventListener('click',(selectedItem)=>{
        if(selectedItem.target.classList.contains('item_link')){
            document.querySelector('.menu-active').classList.remove('menu-active');
            selectedItem.target.classList.add('menu-active');
            let filterName = selectedItem.target.getAttribute('data-name');
            filterImages.forEach((image)=>{
                let filterImages =image.getAttribute('data-name');
                if((filterImages == filterName) || filterName == 'all'){
                    image.style.display='block';
                    // filterImages.style.justifyContent= 'left';
                }else{
                    image.style.display='none';
                }
            })
        }
    })
})



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


/* Change src single_product_sliger start  */
// let product=document.querySelector(".product_1");
// let single_image=document.querySelector(".single_image1");
// function product_1(){
//     single_image.src='/Coffee_Shop/images/product-image-2.jpg';
// }
// /* Change src single_product_sliger end  */

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
let a=[];
ADD_TO_CART.forEach((button)=>{
    button.addEventListener("click",()=>{
        const id=button.getAttribute("data-id");
        const title=button.getAttribute("data-title");
        const image=button.getAttribute("data-image");
        const price=parseInt(button.getAttribute("data-price"));
        const quantity=parseInt(button.getAttribute("data-quantity"));
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
            cart[index].quantity += 1;
        }
        localStorage.setItem("cart",JSON.stringify(cart));
        // Call the function to update the cart quantity displayed in Span_Cart
        updateCartQuantity();
    })
    
});

// When the page loads, update the cart quantity in Span_Cart
document.addEventListener("DOMContentLoaded", () => {
    updateCartQuantity();
});
// Add to Cart end


// ADD_TO_CART.forEach((button)=>{
//     button.addEventListener("click",()=>{
//         const id=button.getAttribute("data-id");
//         const title=button.getAttribute("data-title");
//         const image=button.getAttribute("data-image");
//         const price=parseInt(button.getAttribute("data-price"));
//         const quantity=parseInt(button.getAttribute("data-quantity"));
//         const cartItem={id,title,image,price,quantity};
//         const cart=JSON.parse(localStorage.getItem("cart")) || [];
//         const itemExists = cart.some(cartIt => cartIt.id === cartItem.id);
//         if (!itemExists) {
//             // If the item does not exist, add it to the cart
//             cart.push(cartItem);

//         }
//         else{
//             // If the item exists, increment its quantity
//             const index = cart.findIndex(cartIt => cartIt.id === cartItem.id);
//             cart[index].quantity += 1;
//             // cart[index].price += cartItem.price;
//             }
//         })
//         // cart.forEach((item)=>{
//         //     if(item.id===cartItem.id){
//         //         item.quantity+=1;
//         //         return;
//         //     }   
//         // });
//         // cart.push(cartItem);
//         // if(idx==0){cart.push(cartItem)}
//         // else{
//         // if(a.includes(button.id)){
//         //     alert("This item is already in the cart");
//         // }
//         // else{    
//         //     a.push(button.id);
//         //     plus(idx)  
//         //     cart.push(cartItem);
//         // }}
//         localStorage.setItem("cart",JSON.stringify(cart));
//         // JSON.parse(localStorage.getItem("count"))++;
//     });
    // console.log(typeof cart)
// });



/* single_product_sliger(+,-) start  */
// let minus=document.querySelector(".minus");
// let plus=document.querySelectorAll(".plus");
// let num=document.querySelectorAll(".num");
// const Span_Cart=document.querySelector(".Span_Cart");
// let cunt=0;
// plus.forEach((add)=>{
//     add.addEventListener('click', ()=>{
//         cunt++;
        // const count=JSON.parse(localStorage.getItem("count")) || "";
        // count.push(cunt);
        // const cartBag=JSON.parse(localStorage.getItem("count"));
        // localStorage.setItem("count",JSON.stringify(count));
        // num.forEach((add1)=>{
        // add1.innerHTML=count;})
        // Span_Cart.innerHTML=count;
        // Span_Cart.innerHTML=cartBag;
        // console.log(cartBag);
//     }) 
// })




// get the src of images start
const pic=document.querySelectorAll(".pic");
pic.forEach((button)=>{
    button.addEventListener("click",()=>{
        let product=button.getAttribute("data-product");
        let quantity=parseInt(button.getAttribute("data-quantity"));
        let Products={product,quantity};
        const ProductsItem=JSON.parse(localStorage.getItem("ProductsItem")) || [];
        ProductsItem.push(Products);
        localStorage.setItem("ProductsItem",JSON.stringify(ProductsItem));
    });
});
console.log(localStorage.getItem("ProductsItem"))
// get the src of images end
