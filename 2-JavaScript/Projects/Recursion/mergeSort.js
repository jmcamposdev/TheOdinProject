function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  
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

const array = [2,1,4,3,6,5,8,7,10,9,9,1,90];
console.log(mergeSort(array));
