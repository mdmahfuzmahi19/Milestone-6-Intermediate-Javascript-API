const add = (frist, second) => frist + second;
const getFullName = (frist, last) => frist + ' ' + last;
const multiply = (a, b) => a * b

const result = multiply(7, 8)
// console.log(result);

const addAll = (a , b , c , d , e) => a + b + c + d + e ;

// no perameter arrow function 
const getpie = () => 3.14;

// one parameter
const doubleIt = (num) => num * 2;

// one parameter simple version
const fiveTimes = num => num * 5;
const fiveResult = fiveTimes(2)
// console.log(fiveResult);

// multi line arrow function
    // if you want to return something, use the return
const doMath = (x , y , z) => {
    const fristSum = x + y;
    const secondSum = y + z;
    const multiplyResult = fristSum * secondSum; 
    const result = multiplyResult / 2;
    return result;
}
// const doMathAns = doMath(2,4,6)
// console.log(doMathAns);