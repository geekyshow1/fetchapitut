// POst Data
document.getElementById("btn").addEventListener("click", makerequest);

// Promise Then 
function makerequest() {
 console.log("Button Clicked")
 const myInit = {
  method: 'POST',
  headers: {
   'Content-Type': 'application/json'
  },
  body: '{"name":"Sonam", "job":"Web Dev"}'
 }
 fetch('https://reqres.in/api/users', myInit)
  .then((res) => {
   if (!res.ok) {
    throw Error(res.statusText)
   }
   return res.json()
  }).then((data) => {
   console.log(data)
  }).catch((error) => console.log(error))
}

// Async and Await
// async function makerequest() {
//  try {
//   console.log("Button Clicked")
//   const myInit = {
//    method: 'POST',
//    headers: {
//     'Content-Type': 'application/json'
//    },
//    body: '{"name":"Rahul", "job":"Android App Dev"}'
//   }
//   const res = await fetch('https://reqres.in/api/users', myInit)
//   if (!res.ok) {
//    throw Error(res.statusText)
//   }
//   const data = await res.json()
//   console.log(data)
//  } catch (error) {
//   console.log(error)
//  }
// }