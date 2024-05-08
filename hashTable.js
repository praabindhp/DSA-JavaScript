// Create a Map
let hashTable = new Map();

// Add elements to the Map
hashTable.set("key1", "value1");
hashTable.set("key2", "value2");
hashTable.set("key3", "value3");

// Retrieve elements from the Map
console.log(hashTable.get("key1")); // Output: value1

// Check if a key exists in the Map
if (hashTable.has("key2")) {
  console.log(hashTable.get("key2")); // Output: value2
}

// Remove an element from the Map
hashTable.delete("key3");
