const user ={id:1, name:'kutipoti', job:'actor'}
// JavaScript Object Notation
const stringify = JSON.stringify(user)
// console.log(user);
// console.log(stringify);

// { id: 1, name: 'kutipoti', job: 'actor' }
// {"id":1,"name":"kutipoti","job":"actor"}

const shop = {
    owner:'jackma',
    address: {
        street: 'kualalam pur',
        country: 'singapur'
    },
    product: ['laptop', 'mic', 'monitor', 'keybored'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON); 
const shopObj = JSON.parse(shopJSON)
console.log(shopObj);