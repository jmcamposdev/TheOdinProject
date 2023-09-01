/**
  * Calculate the largest prime factor of a given number.
  * @param {number} number
  * @return {number} largest prime factor of a given number.
 */
function maxPrimeFactor(n) {
  let maxPrime = -1;
  while(n % 2 == 0) {
      n = n / 2;
      maxPrime = 2;
  }

  while(n % 3 == 0) {
      n = n / 3;
      maxPrime = 3;
  }

  for (let i = 5; i <= Math.sqrt(n); i += 6) {
      while (n % i == 0) {
          maxPrime = i;
          n = n / i;
      }
      while (n % (i + 2) == 0) {
          maxPrime = i + 2;
          n = n / (i + 2);
      }
  }

  return n > 4 ? n : maxPrime;
}

console.log(maxPrimeFactor(13195));

// Test cases 
// console.log(largestPrimeFactor(2)); // Should return 2
// console.log(largestPrimeFactor(3)); // Should return 3
// console.log(largestPrimeFactor(123)) // Should return 29.


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

  for (let i = 2; i < number/2 && isPrime; i++) {
    if (number % i == 0) {
      isPrime = false;
    }
  }
  return isPrime;
} 

// console.log(isPrime(2)); // Should return true
// console.log(isPrime(3)); // Should return true
// console.log(isPrime(4)); // Should return false
// console.log(isPrime(5)); // Should return true

function eratosthenesSieve (number) {
  const sieve = new Array(number)
  .fill(1)
  .map((e,i) => i+1)
  .slice(1);

  for (let i = 0; i < sieve.length; i++) {
    const base = sieve[i];
    let multiple = 2;
    console.log(base);
    let numberToRemove = 0;
    for (let j = 0; j < sieve.length && numberToRemove < number; j++) {
      numberToRemove = base * multiple;
      multiple++;
      const index = sieve.indexOf(numberToRemove);
      if (index > 0) {
        sieve.splice(index, 1);
        console.log(sieve);
      }
    }

    multiple = 2;
    numberToRemove = 0;
  }

  return sieve;
}

console.log(eratosthenesSieve(13195));