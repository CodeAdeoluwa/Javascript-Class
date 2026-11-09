const names = ["daniel", "kunle", "praise", "segun", "kunle"]


// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }

// while(names.length < 6){
//     console.log(names)
// }

let i = 1

// while(i < 0){
//     console.log(i)
//     i++
// }

// do{
//     console.log(i);
//     i++
// }while(i < 100)

let carNames = ["volvo", "toyota", "honda"]

// for(let cars of carNames){
//     console.log(cars)
// }


// let count = 1;

// while (count <= 5) {
//   console.log(count);
//   count++; // ← very important! without this it runs forever
// }

let lives = 3

while(lives > 0){
    console.log("live left" + lives)
    lives--
}

console.log("game over")

carNames.forEach((cars, index) => {
    console.log(index + 1 + "." + " " + cars)
})

const person = {
  name: "Ada",
  age: 25,
  city: "Lagos"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}


const fruits = ["Apple", "Banana", "Orange"];

for (let fruit of fruits) {
  if (fruit === "Mango") {
    console.log("Found it! Stopping.");
    break; // ← exits the loop immediately
  }
//   console.log(fruit);
}