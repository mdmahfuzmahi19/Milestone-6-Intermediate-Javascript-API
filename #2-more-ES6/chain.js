const users = [{id: 1, name: 'rohim', job:'bick mikar'}]
// console.log(users[0].job);

const data ={
    amount : 300, 
    data: [
        {id:5 , name: 'ruhan', job:'politic'},
        {id:8 , name: 'reduyan', job:'politic'}
    ]
}

// console.log(data.data[0].id);

const user = {
    id:5001,
    name: 'albard tomas',
    address: {
        street:{
            first:'103/A , shantibag, baluchor',
            second:'thrid floor',
            thrid: 'right side'
        },
        postOffice: 'bondor',
        city: 'sylhet' 
    }
} 

// const userFloor = user.address.stret.second;
    // TypeError: Cannot read properties of undefined (reading 'second')

const userFloor = user.address.stret?.second;
    // undefined
console.log(userFloor);