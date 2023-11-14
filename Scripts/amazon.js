const products =[{
    image:"images/products/athletic-cotton-socks-6-pairs.jpg",
    productName:'Black and Gray Athletic Cotton Socks - 6 Pairs',
    stars:4.5,
    rating:87,
    priceCents:1090
},{
    image:"images/products/intermediate-composite-basketball.jpg",
    productName:'Intermediate Size Basketball',
    stars:4,
    rating:127,
    priceCents:2095
},{
    image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    productName:'Adults Plain Cotton T-Shirt - 2 Pack',
    stars:4.5,
    rating:56,
    priceCents:799
}]

// html generation

let productCardHTML='';
for(let i=0;i<products.length;i++){
    const img=products[i].image;
    const pname = products[i].productName;
    const star = products[i].stars*10;
    const rating = products[i].rating;
    const price = products[i].priceCents;
    const html=`
    <div class="product-container">
        <div class="product-image-container">
            <img class="product-image" src=${img}>
        </div>
        <div class="product-name limit-text-to-2-lines">
            ${pname}
        </div>
        <div class="product-rating-container">
            <img class="product-rating-stars"
                src="images/ratings/rating-${star}.png">
            <div class="product-rating-count link-primary">
                ${rating}
            </div>
        </div>
        <div class="product-price">
            $${price/100}
        </div>
        <div class="product-quantity-container">
            <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
        <div class="product-spacer"></div>

        <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
        </div>
        <button class="add-to-cart-button button-primary">
            Add to Cart
        </button>
    </div>`;
    productCardHTML += html;
}
document.querySelector('.js-products-grid').innerHTML=productCardHTML;
