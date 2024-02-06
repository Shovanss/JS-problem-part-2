const height = [30, 32, 35, 45, 30, 32, 28];
function getMax(numbers){
let max = numbers[0];
for(const num of numbers){
    if(num > max){
        max = num;
    }
}
return max;
}
const max = getMax(height);
console.log(max);


const height = [30, 32, 35, 45, 30, 32, 28];
function getMin(numbers){
let min = numbers[0];
for(const num of numbers){
    if(num < min){
        min = num;
    }
}
return min;
}
const min = getMin(height);
console.log(min);