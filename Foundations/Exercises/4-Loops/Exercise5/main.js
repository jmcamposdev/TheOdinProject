let i = 500;
const para = document.createElement('p');

function isPrime(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

// Insert to the para only prime numbers
while (i >= 2) {
    if (isPrime(i)) {
        para.textContent += i + ", ";
    }
    i--;
}

// To remove the last coma
para.textContent = para.textContent.substring(0, para.textContent.length-2);

// Don't edit the code below here!
const section = document.querySelector('section');
section.appendChild(para);