const student = {};

student.firstName = "Sola";
student.lastName = "Ade";

console.log(student);

// const car = new Object({
//   name: "Fiat",
//   model: 500,
//   color: "white",
//   brand: function (){
//     return this.name + "" + this.model + "" + this.color;
//   }
// });

// console.log(car.brand());

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
// };

// const output = Object.values(person)
// console.log(output.JSON.stringify(person))

// const JJJ = ["adeoluwa", "kunle" ]
// console.log(JSON.parse(JJJ))

// document.getElementById("output").innerHTML = car.brand
// console.log(person.fullName)

//   function() {
//     return this.firstName + " " + this.lastName;
//   }



// const staff = {
//   name: "Ade",
//   salary: 400,
 
// };

// const addSalary = staff.salary = 500
// console.log(addSalary)


// let name = "Sola"

// name = "Ade"

// console.log(name)


function Cars(name, model, color){
  this.CarName = name;
  this.CarModel = model;
  this.CarColor = color;
  this.CarWheel = 4;
}

const Fiat = new Cars("fiat", 500, "white" )
const Honda = new Cars("Honda", 250, "black" )

console.log(Honda)

