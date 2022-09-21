// const headers = {

//     'Content-Type': 'application/json',
  
//     Authorization: 'insert-token-here',
  
//   };
  
   
  
//   const body = {
  
//     userID: 10,
  
//     title: ‘Demo addition',
  
//     body: 'This the body of the new post.',
  
//   };
  
   
  
//   Use the above defined headers and body to make a post call to the url 'https://jsonplaceholder.typicode.com/posts'
  
//   And print the response to the console either it is a resolve or reject call.

// const headers = {
//     'content-Type' : 'application/json',
//     Authorization : 'insert-token-here',
// };

// const body = {
//     userID: 10,
//     title: 'Demo addition',
//     body: 'This the of the new post',
// };

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method :  'POST',
//     headers: headers,
//     body: JSON.stringify(body),
// })
//     .then ( (resolve) => {
//         resolve.json();
//     })
//     .then ( (itesm) => {
//         console.log(itesm);
//     })
//     .catch ( (error) => {
//         console.log(error);
//     });



    const headers = {'Content-Type': 'application/json',Authorization: 'insert-token-here',};
    const body = {userID: 10,title: 'Demo addition',body: 'This the body of the new post.',};
    fetch('https://jsonplaceholder.typicode.com/posts', 
    {method: 'POST',body: JSON.stringify(body),})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
