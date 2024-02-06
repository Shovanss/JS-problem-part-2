const phones = [
    {name: 'symphony', price: 1400, model: 'z5', camera: '50mp'},
    {name: 'redmi', price: 12000, model: '4x', camera: '50mp'},
    {name: 'oneplus', price: 34000, model: '9r', camera: '50mp'},
    {name: 'samsung', price: 76000, model: 's22+', camera: '50mp'},
]

function cheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}
const cheap = cheapestPhone(phones);
console.log(cheap);