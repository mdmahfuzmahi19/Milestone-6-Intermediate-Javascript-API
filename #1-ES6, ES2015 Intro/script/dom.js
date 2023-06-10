document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue'
    }
})
document.getElementById('center-third').addEventListener('click', function(){
    const thirdFriend = document.getElementById('third-friend')
    thirdFriend.style.textAlign = 'center'
})
document.getElementById('add-friend').addEventListener('click', function(){
    const friendsContainer = document.getElementById('friends');
    const friend = document.createElement('div')
    friend.classList.add('friend') 
    friend.innerHTML = `
                <h3 class="friend-name">Friend-1</h3>
                <p>Lorem ipsum dolor sit amet.</p>
    `
    friendsContainer.appendChild(friend)
})