const inputs = document.querySelectorAll('input'); // Select all inputs 
// JSON object of regex patterns
const pattern = {
    username: /^[a-z\d]{5-12}$/,
    email: /^([a-z\d\.-]+)@([a-z\d\.-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^[\w@-]{8,20}$/,
    telephone: /^\d{11}$/,
    slug: /^[a-z\d-]{8-20}$/,
}

// Validation function
function validation (field, pattern) { // Pass in field and pattern
    if (pattern.test(field.value)) {  // If pattern matches field value
        field.className = "valid"; // Add valid class
    } else { // If pattern doesn't match field value
        field.className = "invalid"; // Add invalid class
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        if (!input.value) { // If input is empty
            input.className = ""; // Remove class
        } else { // If input is not empty
            validation(input, pattern[input.attributes.name.value]); // Call validation function
        }
    })
})