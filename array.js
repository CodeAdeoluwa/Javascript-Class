const cars = [];

cars[0] = "Saab"
cars[1] = "Volvo"
cars[2] = "BMW"

console.log(cars[2])

const fruit = new Array("apple", "banana", "orange")
fruit[0] = "watermelon"

// const display = fruit.toString()

const display = JSON.stringify(fruit)


console.log(display)



console.log(typeof(fruit))

console.log(fruit.length);

console.log(fruit.at(2))

console.log(fruit.join(' '))

fruit.pop()
console.log(fruit)

fruit.push("mango")
console.log(fruit)

// fruit.shift();

// console.log(fruit);

fruit.unshift("lemon")
console.log(fruit);


// fruit[fruit.length] = "orange"

fruit[4] = "orange"

console.log(fruit);

const obj = {name:"ade"}
console.log(Array.isArray(obj))

delete fruit[0]
console.log(fruit)

fruit[2] = ""

console.log(fruit)

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

// console.log(myBoys.concat(myGirls))

myBoys.copyWithin(2, 1)

console.log(myBoys)

const num = [[1, 2], [3, 4], [5,6]]

console.log(num.flat())

const numb = [1, 2, 3, 4]

console.log(numb.flatMap(x => (x, x*10)))


const names = ["daniel", "kunle", "praise", "segun", "kunle"]



// names.splice(2, 2, "tunji", "bayo")

// names.splice(1, 1)

// const removeItem = names.toSpliced(1,1)

// console.log(removeItem)
// console.log(names)

// const yorubaName = names.slice(0, 4)
// console.log(yorubaName)

// names.unshift("kunle")

// let position = names.lastIndexOf("kunle")

// console.log(position)

