document.addEventListener('DOMContentLoaded', () => {

    const loggedInUser =localStorage.getItem('loggedInUser')
    if(!loggedInUser){
  
      window.location.href = 'index.html'
    }
    
    function displayUsers() {
        const allEmails = Object.keys(localStorage)

        const allMailIds = allEmails.filter((key) =>
            /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(key)
        )

        const userList = document.getElementById('userList')
        if (allMailIds.length === 0) {
            userList.innerHTML = "<li>No users found</li>"
        } else {
            allMailIds.forEach((email) => {
                const listItem = document.createElement('li')
                listItem.textContent = email;
                userList.appendChild(listItem)
            })
        }
    }
    displayUsers()

    const btn = document.getElementById('logoutBtn')
    btn.addEventListener('click',()=>{

    })

})

function deletedata (){
    localStorage.removeItem('loggedInUser')
    window.location.href = 'index.html'
}
