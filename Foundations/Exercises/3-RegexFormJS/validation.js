const inputs = document.querySelectorAll('input'); // Select all inputs 
const pattern = {
    username: /^[a-z\d]{5-12}$/,
    email: /^([a-z\d\.-]+)@([a-z\d\.-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{8,20}$/,
    telephone: /^\d{11}$/,
    slug: /^[a-z\d-]{8-20}$/,
}

function validation (field, pattern) {
    if (pattern.test(field.value)) { 
        field.className = "valid";

    } else {
        field.className = "invalid";
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validation(input, pattern[input.attributes.name.value]);
    })
})