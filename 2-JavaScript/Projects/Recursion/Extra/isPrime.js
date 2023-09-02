/**
 * Checks if a number is prime
 * @param {Number} number 
 * @return {Boolean} true if the number is prime, false otherwise.
 */
function isPrime(number) {
  let isPrime = true;

  for (let i = 2; i < number/2 && isPrime; i++) {
    if (number % i == 0) {
      isPrime = false;
    }
  }
  return isPrime;
} 