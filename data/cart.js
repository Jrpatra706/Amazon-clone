export const cart =[];

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
}