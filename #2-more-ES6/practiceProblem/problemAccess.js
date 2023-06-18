// problem- 1 ----> Access Object Values age
const student ={
    name: 'fredie',
    age: 26,
} 
console.log(student.age);


// problem- 2 ----> Access Object Values city
let data = {
    location: [
        {
            name: 'babu suna ',
            age: 21,
            city : 'dhaka',
        }
    ]
} 
console.log(data.location[0].city);

// problem - 3
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
}
    // step- 1 ---> console the email
console.log(user.email);
    // step- 2 ---> console the address
console.log(user.address);
    // step- 3 ---> console the city
console.log(user.address.city);
    // step- 4 ---> console the lat
console.log(user.address.geo.lat);
    // step- 5 ---> console the company name
console.log(user.company.name);
