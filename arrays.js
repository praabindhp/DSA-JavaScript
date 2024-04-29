const house = new Array()
house.push('1BHK', '2BHK', '3BHK')
const deleted = house.pop()
console.log(house)
console.log(deleted)

const employee = ['Praabindh', 'Pradeep', 'Bindhu']
const removed = employee.shift()
console.log(employee)
console.log(removed)

const fruits = ['Apple', 'Banana', 'Mango']
const added = fruits.unshift('Orange')
console.log(fruits)
console.log(added)

const cars = ['BMW', 'Audi', 'Benz']
const sliced = cars.slice(1, 2)
console.log(cars)
console.log(sliced)

const bikes = ['Royal Enfield', 'Yamaha', 'KTM']
const spliced = bikes.splice(1, 1, 'Honda')
console.log(bikes)
console.log(spliced)
console.log(bikes)

const digits = [1, 2, 3, 4, 5]
const reversed = digits.reverse()
console.log(digits)

const alphabets = ['a', 'b', 'c', 'd', 'e']
const joined = alphabets.join('')
console.log(joined)

const colors = ['Red', 'Green', 'Blue']
const index = colors.indexOf('Green')
console.log(index)

const elements = ['Earth', 'Wind', 'Fire', 'Water']
const includes = elements.includes('Fire')
console.log(includes)

const items = ['Pen', 'Pencil', 'Eraser']
const found = items.find(i => i === 'Pencil') ? 'Found' : 'Not-Found'
console.log(found)

const values = [1, 2, 3, 4, 5]
const sum = values.reduce((acc, val) => acc + val, 0)
console.log(sum)

const numbers = [1, 2, 3, 4, 5]
const mapped = numbers.map(n => n * 2)
console.log(mapped)

const numbers2 = [1, 2, 3, 4, 5]
const filtered = numbers2.filter(n => n % 2 === 0)
console.log(filtered)