const numbers = [12,34,32,45,56,78,98,67,75,55]
const fives = numbers.find(num => num % 5 === 0)
// console.log(fives);

const products  =[
    {id:1, name:'laptop', price:123000},
    {id:1, name:'tablet', price:23000},
    {id:1, name:'watch', price:500},
    {id:1, name:'phone', price:15000},
];
const cheap = products.find(product => product.price <  40000)
console.log(cheap);