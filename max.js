const disha = 50;
const isha = 35;
if(disha > isha){
    console.log('disha boro')
}
else{
    console.log('isha boro');
}

function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const maxTotal = getMax(45, 78);
console.log(maxTotal);