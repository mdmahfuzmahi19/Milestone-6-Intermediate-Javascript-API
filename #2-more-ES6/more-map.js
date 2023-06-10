const numbers = [12, 44, 55, 77, 88]
const half = numbers.map(x => x/2 )
console.log(half);
const thrid = numbers.map(x => x/3)
console.log(thrid);

const friend = ['Tom willson', 'Tomas', 'Tom carit', 'Totari']
const firstLetter = friend.map(f => f[0])
// console.log(firstLetter);

const nameLength = friend.map(friend => friend.length) 
// console.log(nameLength);

const products  =[
    {id:1, name:'laptop', price:123000},
    {id:1, name:'tablet', price:23000},
    {id:1, name:'watch', price:500},
    {id:1, name:'phone', price:15000},
];
const items = products.map(product => product.name);
const price = products.map(p => p.price)
console.log(items, price);