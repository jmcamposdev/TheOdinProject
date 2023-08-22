/**
 * Calculate the Fibonacci sequence
 * @param {Number} numIteration 
 * @returns {Array} Returns an array with the length of numIteration and the Fibonacci sequence
 */
function fibs (numIteration) {
  const sequence = [0, 1];
  if (numIteration <= 0)  { // If numIteration is less than or equal to 0, return an empty array
    return 'Insert a positive number';
  }
  if (numIteration == 1) { // If numIteration is equal to 1, return an array with 0
    return sequence.splice(0,1);
  }

  for (let i = numIteration; i > 2; i--) { // Loop through the numIteration
    // Add the sum of the last two numbers of the Fibonacci sequence to the array
    sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]);
  }

  return sequence;
}

console.log(fibs(0)); // Expected Result --> []
console.log(fibs(1)); // Expected Result --> [0]
console.log(fibs(2)); // Expected Result --> [0, 1]
console.log(fibs(3)); // Expected Result --> [0, 1, 1]
console.log(fibs(4)); // Expected Result --> [0, 1, 1, 2]
console.log(fibs(8));; // Expected Result --> [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

/**
 * Calculate the Fibonacci sequence recursively
 * @param {Number} numIteration 
 * @returns {Array} Returns an array with the length of numIteration and the Fibonacci sequence
 */
function fibsRec (numIteration, sequence = [0,1]) {
  if (numIteration <= sequence.length) {
    return sequence.splice(0, numIteration);
  }
  
  // Calculate the next number of the Fibonacci sequence
  const nextNumber = sequence.at(-2) + sequence.at(-1);
  sequence.push(nextNumber); // Add the next number to the array
  return fibsRec(numIteration, sequence) // Recursive call
}

console.log(fibsRec(0)); // Expected Result --> []
console.log(fibsRec(1)); // Expected Result --> [0]
console.log(fibsRec(5)); // Expected Result --> [0]
console.log(fibsRec(10)); // Expected Result --> [0]