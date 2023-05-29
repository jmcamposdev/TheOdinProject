const inputs = document.querySelectorAll('input'); // Select all inputs 
const pattern = {
    username: /^[a-z\d]{5-12}$/
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        console.log("key pressed");
    })
})