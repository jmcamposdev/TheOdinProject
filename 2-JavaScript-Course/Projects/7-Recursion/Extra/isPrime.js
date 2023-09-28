/**
 * Checks if a number is prime
 * @param {Number} number 
 * @return {Boolean} true if the number is prime, false otherwise.
 */
function isPrime(number) {
  let isPrime = true; // Assume the number is prime

  // Loop through all numbers from 2 to number/2 and check if the number is divisible by any of them
  for (let i = 2; i < number/2 && isPrime; i++) {
    if (number % i == 0) { // If the number is divisible by any number from 2 to number/2, it is not prime
      isPrime = false; // Set isPrime to false
    }
  }
  return isPrime; // Return the result
} 