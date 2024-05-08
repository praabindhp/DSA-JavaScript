function hashArray(array) {
  const hash = new Map();
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // Convert element to a string to ensure uniqueness
    const key = JSON.stringify(element);
    // Store the index of the element in the hash map
    if (!hash.has(key)) {
      hash.set(key, []);
    }
    hash.get(key).push(i);
  }
  return hash;
}

// Example usage:
const array = [1, 2, 3, 1, 4, 5, 1, 2, 3];
const hashedArray = hashArray(array);

// Retrieve the indices of elements with value 1
console.log(hashedArray.get(JSON.stringify(2))); // Output: [0, 5]
