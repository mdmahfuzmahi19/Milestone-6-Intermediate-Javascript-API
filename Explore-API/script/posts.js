function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
function displayPost(posts) {
    // console.log(posts);
    const postContainer = document.getElementById('post-container')
    for(const post of posts){
        console.log(post);
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h4>User- ${post.id}</h4>
        <h5>Post: ${post.title}</h5>
        <p>Post description: ${post}</p>
        `
        postContainer.appendChild(postDiv)
    }
}
loadPosts()


// function loadPosts() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => displayPost(data))
// }
// function displayPost(posts) {
//     // console.log(posts);
//     const postContainer = document.getElementById('post-container')
//     for(const post of posts){
//         console.log(post);
//         const postDiv = document.createElement('div')
//         postDiv.innerHTML = `
//         <h4>User- ${post.id}</h4>
//         <h5>Post: ${post.title}</h5>
//         <p>Post Description: ${post.body}</p>
//         `
//         postContainer.appendChild(postDiv)
//     }
// }

// loadPosts()



// // function loadPosts() {
// //     fetch('https://jsonplaceholder.typicode.com/posts')
// //     .then(res => res.json())
// //     .then(data => displayPost(data))
// // }
// // function displayPost(posts){
// //     // console.log(posts);
// //     const postContainer = document.getElementById('post-container')
// //     for(const post of posts){
// //         console.log(post);
// //         const postDiv = document.createElement('div')
// //         postDiv.classList.add('post')
// //         postDiv.innerHTML = `
// //         <h4>User-${post.id}</h4>
// //         <h5>Post: ${post.title}</h5>
// //         <p>Post Description: ${post.body}</P>
// //         `
// //         postContainer.appendChild(postDiv)
// //     }
// // }

// // loadPosts()