/**
  * Calculate the largest prime factor of a given number.
  * @param {number} number
  * @return {number} largest prime factor of a given number.
 */
function largestPrimeFactor(number) {
  if (number <= 0) {
    return "Please enter a positive number.";
  }
}

// Test cases
console.log(largestPrimeFactor(2)); // Should return 2
console.log(largestPrimeFactor(3)); // Should return 3
console.log(largestPrimeFactor(13195)) // Should return 29.


function getPrimesNumbers(number) {
  let primes = [];
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function isPrime(number) {
  let isPrime = true;

  for (let i = 2; i < number && isPrime; i++) {
    if (number % i == 0) {
      isPrime = false;
    }
  }
  return isPrime;
} 

console.log(isPrime(2)); // Should return true
console.log(isPrime(3)); // Should return true
console.log(isPrime(4)); // Should return false
console.log(isPrime(5)); // Should return true