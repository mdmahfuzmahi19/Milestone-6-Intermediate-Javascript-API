// const filterNamesByLength = (names) => {
//     return names.filter((name) => name.length % 2 === 0);
//   };
  
//   // Example usage
//   const names = ["John", "Alice", "Bob", "Eve", "Mark"];
//   const filteredNames = filterNamesByLength(names);
//   console.log(filteredNames);
//   // Output: ["Alice", "Bob", "Mark"]  


const friend = (friend) => {
    const newArray = [];
    for(let i = 0 ; i < friend.length; i++){
        // console.log(i);
        if (i % 2 === 0) {
            newArray.push(friend[i])
        }
    }
    return newArray;
    
}

const array = ['mahi', 'yousuf', 'siam', 'ardan']
const result = friend(array)
console.log(result);