// String

// Insertion
// Deletion
// Update

let stringA = "Hello"
let stringB = "World"

// Insertion
let stringC = stringA + " " + stringB
console.log(stringC)

// Deletion
let stringD = stringC.replace("World", "")
console.log(stringD)

let stringArr = ['Hi,', 'Everyone']

// Update
let stringE = stringC.replace("Hello", stringArr[0])
console.log(stringE)