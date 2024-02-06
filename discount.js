// upto 100: 100
// morethan 101-200: 90
// morethan 200: 70

function discountedPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 90;
        return total;
    }
    else{
        const total = quantity * 70;
        return total;
    }
}
const total = discountedPrice(100);
const total1 = discountedPrice(129);
const total2 = discountedPrice(210);
console.log(total, total1, total2);