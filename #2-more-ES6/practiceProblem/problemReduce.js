// problem -1 ----> 
const number = [1, 9, 17, 22];
const total = number.reduce((previous, current) => previous + current ,0 )
// console.log(total);

let sum = 0;
for(let i = 0; i <number.length; i++){
    sum = number[i] + sum;
}
// console.log(sum);


// probelm -2 ---> sum age using for and reduce
const pepole =[
    {name: 'meena', age:20},
    {name: 'rina', age:15},
    {name: 'sugar', age:22},
]
// console.log(pepole[0].age);
let marks = 0; 
for(let i =0 ; i< pepole.length; i++){
    marks = pepole[i].age + marks;
}
console.log(marks);


