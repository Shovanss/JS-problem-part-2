const products = [
    {name: 'shampoo', price: 200, quantity: 2},
    {name: 'cream', price: 100, quantity: 5},
    {name: 'lotion', price: 300, quantity: 6},
]

function cartTotal(products){
    let total = 0;
    for(const product of products){
        const productPrice = product.price * product.quantity;
        total = total + productPrice;
    }
    return total;
}
const totalCost = cartTotal(products);
console.log(totalCost);