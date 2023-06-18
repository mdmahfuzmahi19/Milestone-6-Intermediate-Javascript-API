const numbers = [12,34,32,45,56,78,98,67,75,55]
const bigNums = numbers.filter(number => number > 70)
const tiny = numbers.filter(n => n < 30)
const even = numbers.filter(num => num % 2 === 0)
// console.log(even);

const products  =[
    {id:1, name:'laptop', price:123000},
    {id:1, name:'tablet', price:23000},
    {id:1, name:'watch', price:500},
    {id:1, name:'phone', price:15000},
];
const expensive = products.filter(products => products.price > 15000)
console.log(expensive);