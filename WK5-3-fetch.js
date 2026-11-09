// const data = 
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch((error) => {
//     console.log(error.message)
//   })

// console.log(data)


// const url = "https://jsonplaceholder.typicode.com/users"
// async function getData(){
//     try {
//        const response =  await fetch(url) 
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getData();


const api = "https://dummyjson.com/products"

async function fetchData(){
  try {
    const response = await fetch(api);
    const data = await response.json();
    // console.log(data)

   
    const converData = JSON.stringify(data.products)
    localStorage.setItem("products", converData)

  const getProducts = JSON.parse(localStorage.getItem("products"))
// console.log(getProducts)
getProducts.forEach(products => {
        console.log(`Products ${products.id} - ${products.title} - ${products.images[0]}`)
    })


  } catch (error) {
    console.log(error)
  }
}

fetchData();

localStorage.setItem("name", "Ada");
console.log(localStorage.getItem("name"))
localStorage.removeItem("name")