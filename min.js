const prices = [30000, 32000, 35000, 45000, 30000, 32000, 28000];
function getMin(numbers){
let min = numbers[0];
for(const num of numbers){
    if(num < min){
        min = num;
    }
}
return min;
}
const min = getMin(prices);
console.log(min);