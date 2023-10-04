document.addEventListener("DOMContentLoaded", () => {
const form=  document.getElementById('loginForm')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    const    loginEmail = document.getElementById('loginEmail').value
     const   loginPassword = document.getElementById('loginPassword').value

     const   storedUserData = localStorage.getItem(loginEmail)

        if (!storedUserData) {
            alert("no  data found ")
            return
        }

       const  userdata = JSON.parse(storedUserData)

        if (userdata.Email === loginEmail && userdata.Password === loginPassword) {
            alert("user logged in succesfully")
        } else {
            alert("invalid email adress or password")
        }
    })


})