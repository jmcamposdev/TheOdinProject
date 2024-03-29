/**
 * Eratosthenes Sieve algorithm to find prime numbers up to a given number 
 * works by removing all multiples of a number from a list of numbers starting from 2
 * @param {Number} number 
 * @return {Array} Array of prime numbers
 */
function eratosthenesSieve (number) {
  // Create an array of numbers from 2 to number
  const sieve = new Array(number)
  .fill(1)
  .map((e,i) => i+1)
  .slice(1);

  // Loop through the array and remove all multiples of the current number
  for (let i = 0; i < sieve.length; i++) {
    const base = sieve[i];
    let multiple = 2;
    let numberToRemove = 0;
    // Loop through the array and remove all multiples of the current number
    for (let j = 0; j < sieve.length && numberToRemove < number; j++) {
      numberToRemove = base * multiple;
      multiple++;
      const index = sieve.indexOf(numberToRemove);
      if (index > 0) {
        sieve.splice(index, 1);
        console.log(sieve);
      }
    }

    // Reset multiple and numberToRemove for the next iteration
    multiple = 2;
    numberToRemove = 0;
  }

  return sieve;
}

console.log(eratosthenesSieve(13195)); // Should return 2, 3, 5, 7, 11, 13, 17, 19, 23, 29