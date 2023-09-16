/**
 * Merge sort is a divide and conquer algorithm that works by splitting an array into two halves,
 *  sorting the two halves, and then merging them back together.
 * @param {Array} array 
 * @returns The sorted array
 */
function mergeSort(array) {
  // Base case: If the array has 1 or 0 elements, it is already sorted
  if (array.length < 2) {
    return array;
  }
  
  // Recursive case: Split the array into two halves and sort them
  const sortedLeftHalf = mergeSort(array.slice(0,array.length/2)); // Order the left half of the array
  const sortedRightHalf = mergeSort(array.slice(array.length/2, array.length)); // Order the right half of the array
  
  // Merge the left and right halves of the array
  const sortedArray = []; // Create an empty array to store the sorted array
  // Create two indexes to keep track of the left and right halves of the array
  let leftIndex = 0;
  let rightIndex = 0;

  for (let i = 0; i < sortedLeftHalf.length + sortedRightHalf.length; i++) {
    if (sortedLeftHalf[leftIndex] < sortedRightHalf[rightIndex] || sortedRightHalf[rightIndex] === undefined) {
      sortedArray.push(sortedLeftHalf[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(sortedRightHalf[rightIndex]);
      rightIndex++;
    }
  }
  
  return sortedArray;
}

const array = [2,1,4,3,6,5,8,7,10,9,9,1,90]; // Example array
console.log(mergeSort(array));

// Time complexity: O(n log n)

// Example:
// console.log(mergeSort([2,1,4,3,6,5,8,7,10,9,9,1,90])); // [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 90]
// console.log(mergeSort([2,1,4,3,6,5,8,7,10,9,9,1,90, 100])); // [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 90, 100]
// console.log(mergeSort([2,1,4,3,6,5,8,7,10,9,9,1,90, 100, 0])); // [0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 90, 100]