function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}
function subtract(num1, num2){
    const less = num1 - num2;
    return less;
}
function multiply(num1, num2){
    const multi = num1 * num2;
    return multi;
}
function divide(num1, num2){
    const div = num1 / num2;
    return div;
}

function calculator(a, b, operation){
    if(operation === 'add'){
        const result = add(a, b);
        return result
    }
    if(operation === 'subtract'){
        const result = subtract(a, b);
        return result
    }
    if(operation === 'multiply'){
        const result = multiply(a, b);
        return result
    }
    if(operation === 'divide'){
        const result = divide(a, b);
        return result
    }
}

const total = calculator(5, 7, 'add');
const total2 = calculator(5, 7, 'subtract');
const total3 = calculator(5, 7, 'multiply');
const total4 = calculator(5, 7, 'divide');
console.log(total, total2, total3, total4);