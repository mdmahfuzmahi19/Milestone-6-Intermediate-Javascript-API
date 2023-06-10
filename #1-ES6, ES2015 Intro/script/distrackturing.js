const fish = {
    name:'elish',
    address: 'chandpur',
    color: 'siliver',
    phone: '01311161705',
    price: 4000
}

// const phone = fish.phone

const {phone} = fish;
console.log(phone);

const {address} = fish;
console.log(address);

// arrow distrackturing
const [frist, second] = [12, 34, 65, 83, 46]
console.log(frist, second);

const nayoks = ['sakib', 'baba', 'choncol']
const [number1, bondo, legend] = nayoks;
console.log(legend);
