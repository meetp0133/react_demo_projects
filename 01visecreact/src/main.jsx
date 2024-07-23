import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp(){
//   return(
//     <div>
//       <h1>Custome APPP</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type : "a",
//   props : { 
//       href:'http://google.com',
//       targer :"_blank"
//   },
//   children : "Click me to visit google"
// }

// const anotherElement = (
//   <a href='http://google.com' target='_blank'>Visit google</a>
// )

const anotherUser = "Meet "
const reactElement = React.createElement(
  'a',
  {href : "http://google.com",target : "_blank"},
  "CLick me to google",
  anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
)
