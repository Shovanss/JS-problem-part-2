function total(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please provide a number';
    }
    const sum = num1 + num2;
return sum;
    
}
const sum = total(5, 8);
console.log(sum);