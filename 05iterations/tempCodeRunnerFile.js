const amazonCart = [
    {
        item: 'js course', 
        price: 2999
    },
    {
        item: 'py course', 
        price: 999
    },
    {
        item: 'mobile dev course', 
        price: 5999
    },
    {
        item: 'webdev course', 
        price: 3999
    },
]

const priceToPay = amazonCart.reduce((acc, item) => item.price + acc, 0);

console.log(priceToPay);