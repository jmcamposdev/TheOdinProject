/**
 * Calculate the Fibonacci sequence
 * @param {Number} numIteration 
 * @returns {Array} Returns an array with the length of numIteration and the Fibonacci sequence
 */
function fibs (numIteration) {
  if (numIteration <= 0)  { // If numIteration is less than or equal to 0, return an empty array
    return [];
  }
  if (numIteration == 1) { // If numIteration is equal to 1, return an array with 0
    return [0];
  }

  // If numIteration is greater than 1, calculate the Fibonacci sequence
  const fibSequence = [0, 1]; // Initialize the array with the first two numbers of the Fibonacci sequence
  let index = 0; // Initialize the index to 0
  for (let i = numIteration; i > 0; i--) { // Loop through the numIteration
    // Add the sum of the last two numbers of the Fibonacci sequence to the array
    fibSequence.push(fibSequence[index] + fibSequence[index++ + 1]);
  }

  return fibSequence;
}

console.log(fibs(0)); // Expected Result --> []
console.log(fibs(1)); // Expected Result --> [0]
console.log(fibs(2)); // Expected Result --> [0, 1]
console.log(fibs(3)); // Expected Result --> [0, 1, 1]
console.log(fibs(4)); // Expected Result --> [0, 1, 1, 2]
console.log(fibs(8));; // Expected Result --> [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]