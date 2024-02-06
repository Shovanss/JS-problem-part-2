const abir = 25;
const nava = 38;
const sirat = 15;
if(abir > nava && abir > sirat){
    console.log('abir boro');
}
else if(nava > sirat && nava > abir){
    console.log('nava boro');
}
else{
    console.log('sirat boro');
}

function maxOfThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num3 && num2 > num1){
        return num2;
    }
    else{
        return num3;
    }
}
const number = maxOfThree(25, 35, 20);
console.log(number);

const max = Math.max(20, 25, 45, 65);
console.log(max);