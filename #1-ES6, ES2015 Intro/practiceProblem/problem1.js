// problem -1
const arrow = function (num1, num2, num3) {
    const multipy =  num1 * num2 * num3;
    return multipy;
}
const result = arrow(2,2,2)
console.log(result);

// problem -2
const line = `I am a Web Developer.
I love to code. 
I love to eat biryani.`
console.log(line);

// problem -3
const defaultPara = (num1, num2 = 0) => {
    const sum = num1 + num2;
    return sum
}
const defaultResult = defaultPara(8)
console.log(defaultResult);