export let cart =JSON.parse(localStorage.getItem('cart'));

if (!cart){
    cart = [{
        id:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:2
    },{
        id:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity:1
    }];
}

function updateCart(){
    localStorage.setItem('cart',JSON.stringify(cart));
}
// add to cart array
export function addToCart(button){
    let item;
    cart.forEach((c)=>{
        if(c.id ==button.dataset.productId){
            item=c;
        }
    });
    if(item){
        item.quantity +=1;
    }
    else{
        cart.push({
            id:button.dataset.productId,
            quantity:1
        });
    }
    updateCart();
}
 
export function deleteFromCart(productId){
    const newCart=[];
    cart.forEach((c) => {
      if (c.id !== productId) {
        newCart.push(c);
      }
    });
    cart=newCart;
    updateCart();
}