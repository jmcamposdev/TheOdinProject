/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

function troubleshooting() {
	const a = 1;
	const b = 1;

	let result;

	// Edit between these lines
	// =================================
    // The problem is that the variables a and b are strings, not numbers.
    // The solution is to remove the quotes around the variables.
	result = a + b;

	// =================================

	return result;
}

// Do not change this 
module.exports = troubleshooting;