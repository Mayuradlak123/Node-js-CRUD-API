const  getUniqueElement=(arr)=> {
    // Create an empty array to store unique elements
    let ansArray = [];
  
    // Loop through each element in the input array
    for (let i = 0; i < arr.length; i++) {
      // Check if the current element is not already in the uniqueArray
      if (ansArray.indexOf(arr[i]) === -1) {
        // If not present, add it to the uniqueArray
        ansArray.push(arr[i]);
      }
    }
  
    return ansArray;
  }
  

  const arr = [9, 21, 3, 14, 21, 9, 14, 9, 17, 17, 8];
  const result = getUniqueElement(arr);
  console.log(result);
  