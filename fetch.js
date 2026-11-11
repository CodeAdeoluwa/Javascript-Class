// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => console.log(data));

// async function allUsers(){
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// allUsers();

//   fetch('https://dummyjson.com/posts')
// .then(res => res.json())
// .then(console.log);

 async function allPost(){
      const getPosts =  localStorage.getItem("posts")
     const convertPost = JSON.parse(getPosts)

     if(getPosts){
        convertPost.map(post => {
          container.innerHTML += `
          <div>
            <h1> ${post.title} </h1>
            <p> ${post.body} </p>
            <p> views ${post.views} | reaction: likes ${post.reactions.likes} | dislike ${post.reactions.dislikes} </p>
          </div>

          `
         
      })
     }

    try {

      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      // console.log(data);

      const convertData = JSON.stringify(data.posts)

      localStorage.setItem("posts", convertData);
 
  
    } catch (error) {
      console.log(error);
    }
  }

  allPost();


// document
//   .getElementById("submitData")
//   .addEventListener("click", async function searchPosts() {
//     try {
// let container = document.getElementById("container");
//       const InputValue = document.getElementById("searchPost").value;
//       const response = await fetch(
//         `https://dummyjson.com/posts/search?q=${InputValue}`,
//       );
//       const data = await response.json();
//       console.log(data)

//          container.innerHTML = "";

//       data.posts.map((post) => {
//         container.innerHTML += `
//                <div>
//             <h1> ${post.title} </h1>
//             <p> ${post.body} </p>
//             <p> views ${post.views} | reaction: likes ${post.reactions.likes} | dislike ${post.reactions.dislikes} </p>
//           </div>
              
//               `;
//       });



//     } catch (error) {
//       console.log(error);
//     }
//   });

// searchPosts();

let num = [10, 20, 30]

for(numeric of num){
  console.log(numeric)  
}