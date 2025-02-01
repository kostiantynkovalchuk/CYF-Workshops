/*
There is a bug in this code which may not be immediately obvious. 
Hint: Try different test cases to uncover the bug. Then update the code  to 
resolve the bug. 
*/

function calculateAverage(arr) {
  if (arr.length === 0) {
    return undefined; // Handle empty array case
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new Error(`Invalid element detected: ${arr[i]} is not a number.`);
    }
    sum += arr[i];
  }

  return sum / arr.length;
}

// Test cases
let arr1 = [1, 2, 3, 4, 5]; // Valid case
console.log(calculateAverage(arr1)); // Output: 3

let arr2 = []; // Empty array case
console.log(calculateAverage(arr2)); // Output: undefined

let arr3 = [1, 2, "a", 4, 5]; // Invalid element case
try {
  console.log(calculateAverage(arr3));
} catch (error) {
  console.error(error.message); // Output: Invalid element detected: a is not a number.
}
