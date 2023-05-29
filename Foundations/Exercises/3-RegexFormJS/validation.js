const inputs = document.querySelectorAll('input'); // Select all inputs 
const pattern = {
    username: /^[a-z\d]{5-12}$/,
    email: /^([a-z\d\.-]+)@([a-z\d\.-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{8,20}$/,
    telephone: /^\d{11}$/,
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        console.log("key pressed");
    })
})