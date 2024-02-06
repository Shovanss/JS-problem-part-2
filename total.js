const products = [
    {name: 'shampoo', price: 200, quantity: 2},
    {name: 'cream', price: 100, quantity: 5},
    {name: 'lotion', price: 300, quantity: 6},
]

function getTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}
const totalCost = getTotal(products);
console.log(totalCost);