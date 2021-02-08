// POst Data
document.getElementById("btn").addEventListener("click", makerequest);

// Promise Then 
function makerequest(e) {
  e.preventDefault()
  let name = document.getElementById("name").value
  let job = document.getElementById("job").value
  console.log("Button Clicked")
  const myInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name, job: job })
  }
  console.log("Body:", myInit.body)
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
// async function makerequest(e) {
//   e.preventDefault()
//   try {
//     console.log("Button Clicked")
//     let name = document.getElementById("name").value
//     let job = document.getElementById("job").value
//     const myInit = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ name: name, job: job })
//     }
//     const res = await fetch('https://reqres.in/api/users', myInit)
//     if (!res.ok) {
//       throw Error(res.statusText)
//     }
//     const data = await res.json()
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }