function findCommonElements(arr1, arr2) {
    // Create an empty array to store common elements
    let commonArray = [];
  
    // Loop through each element in the first array
    for (let i = 0; i < arr1.length; i++) {
      // Check if the current element is also present in the second array
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          // If common, add it to the commonArray
          commonArray.push(arr1[i]);
          break; // Break the inner loop once a common element is found
        }
      }
    }
  
    return commonArray;
  }
  
  // Example usage:
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 4, 5, 6, 7];
  const result = findCommonElements(array1, array2);
  console.log(result); // Output: [3, 4, 5]
  