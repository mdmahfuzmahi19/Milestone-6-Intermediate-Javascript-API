// function add(frist, second) {
//     console.log(frist, second);
//     second = second || 0;
//     // if (second === undefined) {
//     //     second = 0;
//     // }
//     const total = frist + second ;
//     return total;
// }

function add(frist = 0, second = 0 ) {
    const total = frist + second;
    return total;
}
const result = add()
console.log(result);

function fullName(frist, second = 'chowdhury') {
    const name = frist + ' ' + second ;
    return name;
}
const name = fullName('aslam')
console.log(name);