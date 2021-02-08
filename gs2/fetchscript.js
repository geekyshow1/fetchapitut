document.getElementById("btn").addEventListener("click", makerequest);

// Promise Then | Error handling
function makerequest() {
 console.log("Button Clicked")
 fetch('data.json').then((res) => {
  if (!res.ok) {
   throw Error(res.statusText)
  }
  console.log("Res", res);
  const dt = res.json()
  console.log("DT", dt)
  return dt
 }).then((data) => {
  console.log("Data", data)
  console.log(data.name)
  console.log(data.roll)
 }).catch((error) => { console.log(error) })
}

// Promise Then | Showing Data in Browser
// function makerequest() {
//  console.log("Button Clicked")
//  fetch('data.json').then((res) => {
//   if (!res.ok) {
//    throw Error(res.statusText)
//   }
//   console.log(res);
//   return res.json()
//  }).then((data) => {
//   console.log(data)
//   document.getElementById("divdata1").innerText = data.name
//   document.getElementById("divdata2").innerText = data.roll
//  }).catch((error) => { console.log(error) })
// }

// Async and Await | Error handling
// async function makerequest() {
//  try {
//   console.log("Button Clicked")
//   const res = await fetch('data.json')
//   if (!res.ok) {
//    throw Error(res.statusText)
//   }
//   console.log(res)
//   const data = await res.json()
//   console.log(data)
//  } catch (error) {
//   console.log(error)
//  }
// }

// Async and Await | Showing Data in Browser
// async function makerequest() {
//  try {
//   console.log("Button Clicked")
//   const res = await fetch('data.json')
//   if (!res.ok) {
//    throw Error(res.statusText)
//   }
//   console.log(res)
//   const data = await res.json()
//   console.log(data)
//   document.getElementById("divdata1").innerText = data.name
//   document.getElementById("divdata2").innerText = data.roll
//  } catch (error) {
//   console.log(error)
//  }
// }