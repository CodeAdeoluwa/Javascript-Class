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
const container = document.getElementById("container")


 async function allPost(){
    try {
      const response = await fetch("https://dummyjson.com/posts");
      const data = await response.json();
      console.log(data);

        data.posts.map(post => {
          container.innerHTML += `
          <div> 
            <h1> ${post.title} </h1>
            <p> ${post.body} </p>
            <p> views ${post.views} | reaction: likes ${post.reactions.likes} | dislike ${post.reactions.dislikes} </p>
          
          </div>
          
          `

      })
    } catch (error) {
      console.log(error);
    }
  }

  allPost();

