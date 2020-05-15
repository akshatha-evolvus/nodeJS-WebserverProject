console.log("javascript file is loaded")


// const weatherForm = document.querySelector('form');
// const search = document.querySelector('input');
// const messageOne = Document.querySelector('#message-1');

 fetch('http://puzzle.mead.io/puzzle').then((response) =>{
     response.json().then((data)=>
     {
         console.log(data);
     })
 })

// weatherForm.addEventListener ('submit', (e) => {
//     e.preventDefault();
//     const location= search.value;
//     console.log("searching")
//     console.log(search.value)
//     console.log(location)
//     console.log("searching")

//  fetch('http://localhost:3000/weather?address='+location).then((response) =>{
//      response.json().then((data)=>{
//      if(data.error)
//      {
//          console.log(data.error);
//      }else
//      {
//         console.log(data.location);
//         console.log(data.forecast);
//      }
    
//     })
//  })
// })


// fetch('http://localhost:1997/weather?address='+location).then((response) => {
//         response.json().then((data) => {
//             if (location=='') {
//                 console.log("Give an address")
//                 messageOne.textContent = "Enter Address"
//                 messageTwo.textContent = ""
//            }
//  else if (data.error) {
//                  console.log("invalid  location",data.error)
//                  messageOne.textContent = "Invalid Address"
//                  messageTwo.textContent = ""
//                 }
//             else {
//                  console.log("Location:",data.location) 
//                  console.log("Forecast:", data.forecast) 
//                  messageOne.textContent=data.location 
//                  messageTwo.textContent = data.forecast
//             }
//         })
//  })
// })





 
 
