/*
Filter By Condition
Array Filtration
*/

function filterByProperty(objects, propertyName, value) {
  return objects.filter((obj) => obj[propertyName] === value); // Access the property using bracket notation
}

const products = [
  { name: "Shirt", price: 200 },
  { name: "Hat", price: 150 },
  { name: "Jeans", price: 400 },
];

console.log(filterByProperty(products, "price", 200)); // Output: [{ name: "Shirt", price: 200 }]
