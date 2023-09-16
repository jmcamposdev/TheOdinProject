/**
 * Calculate all prime numbers up to a given number.
 * @param {Number} number 
 * @return {Array} Array of prime numbers
 */
function getPrimesNumbers(number) {
  let primes = [];
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}