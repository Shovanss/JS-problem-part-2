// chair - 3cft 
// table - 5cft 
// bed - 50cft

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 5;
    const perBedWood = 50;
    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;
    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}
const wood = woodQuantity(5, 3, 2);
console.log(wood);


// shirt 500
// pant 300
// shoe 900

function priceQuantity(shirtQuantity, pantQuantity, shoeQuantity){
    const perShirt = 500;
    const perPant = 300;
    const perShoe = 900;
    const shirtTotalPrice = shirtQuantity * perShirt;
    const pantTotalPrice = pantQuantity * perPant;
    const shoeTotalPrice = shoeQuantity * perShoe;
    const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
    return totalPrice;
}
const price = priceQuantity(5, 5, 5);
console.log(price);