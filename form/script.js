
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('myForm')

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('exampleInputEmail1').value
        const password = document.getElementById('exampleInputPassword1').value
        const passcheck = document.getElementById('exampleInputPassword2').value
        const checked = document.getElementById('exampleCheck1').checked

        if (!isValidEmail(email)) {
            alert("enter a valid email")
            return
        }
        if (!isValidPass(password)) {
            alert("enter a valid password it shuold contain atleast 1 uppercase letter and special character")
            return
        }
        if (!(password === passcheck)) {
            alert("password dosent match")
            return
        }
   
        const formData = {
            Email: email,
            Password: password,
            passcheck: passcheck,
            Checked: checked
        }
        const existingData = JSON.parse(localStorage.getItem(email));
        if (existingData) {
            alert("Email is already registered");
            return;
        }
        alert("Regestration Done sucessfully")

        localStorage.setItem(email, JSON.stringify(formData))
        try {
            const res = await axios.post("https://reqres.in/api/users", formData)
            const userData = await res.data
            console.log("post req succesfull")

            console.log(userData)
        } catch (error) {
            console.log("error occured while posting user data : " + error)
        }

    })
    function isValidEmail(email) {

        const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;;
        return emailRegex.test(email);
    }
    function isValidPass(password) {
        const passRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,}$/
        return passRegex.test(password)
    }

})




