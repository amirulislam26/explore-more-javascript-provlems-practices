const phones = [
    { name: 'Samsung', camera: 212, storage: '32gb', price: 36000, color: 'yellow'},
    { name: 'vivo', camera: 112, storage: '15gb', price: 30000, color: 'green'},
    { name: 'itel', camera: 412, storage: '16gb', price: 9000, color: 'red'},
    { name: 'vison', camera: 124, storage: '64gb', price: 7000, color: 'black'},
    { name: 'oppo', camera: 121, storage: '128gb', price: 6000, color: 'silver'}
];


function cheapestPhone(phones){
    let cheapeat = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapeat.price){
            cheapeat = phone;
        }
    }
    return cheapeat;
}


const mySelection = cheapestPhone(phones);
console.log(mySelection);