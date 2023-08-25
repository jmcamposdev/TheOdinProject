/**
 * Calculates the sum of all the multiples of 3 or 5 below the provided parameter value number.
 * @param {number} number 
 * @return {number} sum of all the multiples of 3 or 5 below the provided parameter value number.
 */
function multiplesOf3and5(number) {
  number--;
  if (number == 0) return 0;
  if (number % 3 == 0 || number % 5 == 0) {
    return number + multiplesOf3and5(number);
  }
  return multiplesOf3and5(number);
}

console.log(multiplesOf3and5(10)); // Should return 23
console.log(multiplesOf3and5(1000)); // Should return 233168
console.log(multiplesOf3and5(8456)); // Should return 16687353