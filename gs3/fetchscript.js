document.getElementById("btn").addEventListener("click", makerequest);

// Promise then | Single Data
function makerequest() {
 console.log("Button Clicked")
 fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((res) => {
   if (!res.ok) {
    throw Error(res.statusText)
   }
   return res.json()
  }).then((data) => {
   console.log("Data:", data)
   console.log("ID:", data.id)
   console.log("Title:", data.title)
   console.log("Body:", data.body)
  }).catch((error) => { console.log(error) })
}

// Promise then | Single Data | Showing Data in Browser
// function makerequest() {
//  console.log("Button Clicked")
//  fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((res) => {
//    if (!res.ok) {
//     throw Error(res.statusText)
//    }
//    return res.json()
//   }).then((data) => {
//    console.log("Data:", data)
//    document.getElementById("pid").innerText = data.id
//    document.getElementById("title").innerText = data.title
//    document.getElementById("body").innerText = data.body
//   }).catch((error) => { console.log(error) })
// }

// Promise then | Multiple Data
// function makerequest() {
//  console.log("Button Clicked")
//  fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((res) => {
//    if (!res.ok) {
//     throw Error(res.statusText)
//    }
//    return res.json()
//   }).then((data) => {
//    console.log("Data:", data)
//    data.forEach(element => {
//     console.log("ID:", element.id)
//     console.log("Title:", element.title)
//     console.log("Body:", element.body)
//    });
//   }).catch((error) => { console.log(error) })
// }

// Promise then | Multiple Data | Showing Data in Browser
// function makerequest() {
//  console.log("Button Clicked")
//  fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((res) => {
//    if (!res.ok) {
//     throw Error(res.statusText)
//    }
//    return res.json()
//   }).then((data) => {
//    console.log("Data:", data)
//    let output = document.getElementById("allpost")
//    data.forEach(element => {
//     output.innerHTML += `
//     <div>ID: ${element.id}</div>
//     <div>Title: ${element.title}</div>
//     <div>Body: ${element.body}</div> <hr>
//     `
//    });
//   }).catch((error) => { console.log(error) })
// }

// Async and Await | Single Data
// async function makerequest() {
//  try {
//   console.log("Button Clicked")
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//   if (!res.ok) {
//    throw Error(res.statusText)
//   }
//   const data = await res.json()
//   console.log("Data", data)
//   console.log("ID", data.id)
//   console.log("Title", data.title)
//   console.log("Body", data.body)
//  } catch (error) {
//   console.log(error)
//  }
// }

// Async and Await | Single Data | Showing Data in Browser
// async function makerequest() {
//  try {
//   console.log("Button Clicked")
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//   if (!res.ok) {
//    throw Error(res.statusText)
//   }
//   const data = await res.json()
//   console.log("Data", data)
//   document.getElementById("pid").innerText = data.id
//   document.getElementById("title").innerText = data.title
//   document.getElementById("body").innerText = data.body
//  } catch (error) {
//   console.log(error)
//  }
// }

// Async and Await | Multiple Data
// async function makerequest() {
//  try {
//   console.log("Button Clicked")
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   if (!res.ok) {
//    throw Error(res.statusText)
//   }
//   const data = await res.json()
//   console.log("Data", data)
//   data.forEach(element => {
//    console.log("ID:", element.id)
//    console.log("Title:", element.title)
//    console.log("Body:", element.body)
//   });
//  } catch (error) {
//   console.log(error)
//  }
// }

// Async and Await | Multiple Data | Showing Data in Browser
// async function makerequest() {
//  try {
//   console.log("Button Clicked")
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   if (!res.ok) {
//    throw Error(res.statusText)
//   }
//   const data = await res.json()
//   console.log("Data", data)
//   let output = document.getElementById("allpost")
//   data.forEach(element => {
//    output.innerHTML += `
//     <div>ID: ${element.id}</div>
//     <div>Title: ${element.title}</div>
//     <div>Body: ${element.body}</div> <hr>
//     `
//   });
//  } catch (error) {
//   console.log(error)
//  }
// }