const numbers = [1,2,3,4,5]
// .reduce (accumulatorFunction, initial Value)
// accumulatorFunction use two paramitar
// const total = numbers.reduce((previous, current) => previous + current , 0)
const total = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current
} , 0)
console.log(total);