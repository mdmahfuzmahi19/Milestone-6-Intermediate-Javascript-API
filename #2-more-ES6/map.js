// const output = [];
// for(const number of numbers){
//     const doubled = number *2;
//     output.push(doubled)    
// }
const numbers = [2, 4, 6, 8, 3]

function getDouble(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled)
    }
    return output;
}
function doubleItOld(num) {
    return num *2
}
const doubleIt = num => num * 2; 

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(x => x * 2);
// console.log(makeDoubleDirect);
const fiveTime = [1,2,3,4,5].map(x => x * 5)
console.log(fiveTime);


const result = getDouble(numbers)
console.log(result);
console.log(makeDouble);


let num = [1,2,3,4,5,6,7]
let add = num.map(value => value +1)
console.log(add);