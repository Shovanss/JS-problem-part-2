// first100: 100
// 101to200: 90
// above 200: 70

function discountedPrice(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
        
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const total = remainingTotal + first100Total;
return total;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Price;
        const total = remainingTotal + first100Total + second100Total;
return total;
    }
}
const total = discountedPrice(100);
const total1 = discountedPrice(129);
const total2 = discountedPrice(210);
console.log(total, total1, total2);