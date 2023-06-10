// const arrow = (number) => {
//     let sum = 0;
//     for(let i = 0; i < number.length; i++){
//         const square = (Math.pow(number[i], 2));
//         sum = sum + square;
//     }
//     const average = sum / number.length;
//     return average;
// }

// -----------You can also do it like this way

const arrow = (numbers) => {
    let sum = 0;
    for(const number of numbers){
        // console.log(number);
        const square = (Math.pow(number, 2));
        sum = sum + square;
    }
    const average = sum / numbers.length;
    return average;
}


const numbers = [1, 3, 5, 2, 7]
const result = arrow(numbers)
console.log(result);