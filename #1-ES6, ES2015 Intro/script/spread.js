const max = Math.max(12, 45, 65, 98, 45)
// console.log(max);
const numbers = [12, 45, 65, 98, 45, 122];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

// to make a new arrow from orginal and to fixed the number
const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(888);
console.log(numbers);
console.log(numbers2);

// to make a arrow form old arrow
const numbers3 = [...numbers]

const numbers4 = [33, ...numbers, 122]
// console.log(numbers4);