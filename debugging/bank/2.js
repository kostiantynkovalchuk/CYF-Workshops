/*
This function should return the value of the largest number in the given array. 
Can you fix the bug in this function

*/

function getLargestNum(arr) {
  if (arr.length === 0) {
    return undefined; // Handle empty array case
  }

  let largestNum = arr[0]; // Initialize to the first element
  for (let i = 1; i < arr.length; i++) {
    // Loop condition corrected
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

let arr = [1, 2, 3, 4, 10];
console.log(getLargestNum(arr)); // Output: 10
