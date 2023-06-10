// function declaration 
// function add(frist, second) {
//     const total = frist + second;
//     return total ;
// }

// veriable declaration
const number = 56;

// function experssion
const add1 = function add1(frist , second) {
    const total = frist + second ;
    return total;
}
// function experssion with anonymous function
const add2 = function (frist , second) {
    const total = frist + second;
    return total;
}

function add4(frist , second) {
    return frist + second;
}
const add5 = function (frist , second) {
    return frist + second;
} 
// arrow function
const  add6 = (frist , second) => frist + second;

const result = add6(10, 20)
console.log(result);