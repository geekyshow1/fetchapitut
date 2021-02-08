document.getElementById("btn").addEventListener("click", makerequest);

function makerequest() {
 console.log("Button Clicked")
 const promiseObj = fetch('data.txt')
 console.log(promiseObj)
 promiseObj.then((res) => {
  console.log(res);
  return res.text()
 }).then((data) => {
  console.log(data)
 })
}

// function makerequest() {
//  console.log("Button Clicked")
//  fetch('data.txt').then((res) => {
//   console.log(res);
//   return res.text()
//  }).then((data) => {
//   console.log(data)
//  })
// }

// Promise Then | Error handling
// function makerequest() {
//  console.log("Button Clicked")
//  fetch('data1.txt').then((res) => {
//   if (!res.ok) {
//    throw Error(res.statusText)
//   }
//   console.log(res);
//   return res.text()
//  }).then((data) => {
//   console.log(data)
//  }).catch((error) => { console.log(error) })
// }

// Promise Then | Showing Data in Browser
// function makerequest() {
//  console.log("Button Clicked")
//  fetch('data.txt').then((res) => {
//   if (!res.ok) {
//    throw Error(res.statusText)
//   }
//   console.log(res);
//   return res.text()
//  }).then((data) => {
//   console.log(data)
//   document.getElementById("divdata").innerText = data
//  }).catch((error) => { console.log(error) })
// }

// Async and Await
// async function makerequest() {
//  console.log("Button Clicked")
//  const res = await fetch('data.txt')
//  console.log(res)
//  const data = await res.text()
//  console.log(data)
// }

// Async and Await | Error handling
// async function makerequest() {
//  try {
//   console.log("Button Clicked")
//   const res = await fetch('data1.txt')
//   if (!res.ok) {
//    throw Error(res.statusText)
//   }
//   console.log(res)
//   const data = await res.text()
//   console.log(data)
//  } catch (error) {
//   console.log(error)
//  }
// }

// Async and Await | Showing Data in Browser
// async function makerequest() {
//  try {
//   console.log("Button Clicked")
//   const res = await fetch('data.txt')
//   if (!res.ok) {
//    throw Error(res.statusText)
//   }
//   console.log(res)
//   const data = await res.text()
//   console.log(data)
//   document.getElementById("divdata").innerText = data
//  } catch (error) {
//   console.log(error)
//  }
// }