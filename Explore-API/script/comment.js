function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}
function displayComment(comments) {
    const divContainer = document.getElementById('div-container')
    for(const comment of comments){
        console.log(comment);
        const commentDiv = document.createElement('div')
        commentDiv.innerHTML = `
        <h3>Name: ${comment.name}</h3>
        <h5>Email: ${comment.email}</h5>
        <p>Description: ${comment.body}</p>
        `
        divContainer.appendChild(commentDiv)
    }
}
// loadComment()