document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('loginForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const loginEmail = document.getElementById('loginEmail').value
        const loginPassword = document.getElementById('loginPassword').value
        const email = document.getElementById('exampleInputEmail1').value;
        const storedUserData = JSON.parse(localStorage.getItem(loginEmail))
        console.log(storedUserData)

        if (!storedUserData) {
            alert("no  data found ")
            return
        }

        const userdata = storedUserData

        if (userdata.Email === loginEmail && userdata.Password === loginPassword) {
            alert("user logged in succesfully")
           localStorage.setItem('loggedInUser',loginEmail)

            window.location.href = 'list.html'
        } else {
            alert("invalid email adress or password")
        }
    })


})