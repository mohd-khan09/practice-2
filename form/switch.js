document.addEventListener("DOMContentLoaded", () => {
    const registerDiv = document.getElementById('registerDiv')
    const loginDiv = document.getElementById('loginDiv')
    const showRegisterButton = document.getElementById('showRegister')
    const showLoginButton = document.getElementById('showLogin')
    const LoginHeading = document.getElementById('Loginheading')
    const registerHeading = document.getElementById('Registerheading')

    showRegisterButton.addEventListener('click', () => {
        loginDiv.style.display = 'none'
        registerDiv.style.display = 'block'
        showRegisterButton.style.display = 'none'
        showLoginButton.style.display = 'block'
        registerHeading.style.display = 'block'
        LoginHeading.style.display = 'none'

        console.log("Switch to login clicked")
    })
    showLoginButton.addEventListener('click', () => {
        registerDiv.style.display = 'none'
        loginDiv.style.display = 'block'
        showLoginButton.style.display = 'none'
        showRegisterButton.style.display = 'block'
        LoginHeading.style.display = 'block'
        registerHeading.style.display = 'none'

        console.log("Switch to register clicked")
    })


})