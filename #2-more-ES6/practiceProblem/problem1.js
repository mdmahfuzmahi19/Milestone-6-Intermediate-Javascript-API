const odd = [1, 3, 5, 7, 9]
// ----------make is odd array to even array ----------//


const even = odd.map(num => num +1)
console.log(even);

const numbers = (odd) => {
    // const newArray = [];
    for(let i = 0; i < odd.length; i++){
        if (odd[i] % 2 !== 0) {
            odd[i] += 1
        }
    }
    return odd;
}

const result = numbers(odd)
console.log(result);

