import { cart } from "../data/cart.js";
import { products } from "../data/products.js";

let checkoutHTML='';
cart.forEach((cItem)=>{
    let matchingProduct;
    products.forEach((product)=>{
        // console.log(product);
        if(product.id === cItem.id){
            // console.log(product.id);
            matchingProduct=product;
        }
    });
    const image = matchingProduct.image;
    const pname = matchingProduct.name;
    const price = matchingProduct.priceCents;
    const pquantity = cItem.quantity;
    const html = `
    <div class="cart-item-container">
    <div class="delivery-date">
        Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
        <img class="product-image"
        src="${image}">

        <div class="cart-item-details">
        <div class="product-name">
            ${pname}
        </div>
        <div class="product-price">
            $${(price/100).toFixed(2)}
        </div>
        <div class="product-quantity">
            <span>
            Quantity: <span class="quantity-label">${pquantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
            Update
            </span>
            <span class="delete-quantity-link link-primary">
            Delete
            </span>
        </div>
        </div>

        <div class="delivery-options">
        <div class="delivery-options-title">
            Choose a delivery option:
        </div>
        <div class="delivery-option">
            <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-1">
            <div>
            <div class="delivery-option-date">
                Tuesday, June 21
            </div>
            <div class="delivery-option-price">
                FREE Shipping
            </div>
            </div>
        </div>
        <div class="delivery-option">
            <input type="radio"
            class="delivery-option-input"
            name="delivery-option-1">
            <div>
            <div class="delivery-option-date">
                Wednesday, June 15
            </div>
            <div class="delivery-option-price">
                $4.99 - Shipping
            </div>
            </div>
        </div>
        <div class="delivery-option">
            <input type="radio"
            class="delivery-option-input"
            name="delivery-option-1">
            <div>
            <div class="delivery-option-date">
                Monday, June 13
            </div>
            <div class="delivery-option-price">
                $9.99 - Shipping
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>`;
    checkoutHTML +=html;
});
document.querySelector('.js-order-summary').innerHTML=checkoutHTML;