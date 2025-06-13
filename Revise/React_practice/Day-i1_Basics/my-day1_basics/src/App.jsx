// import React from 'react'
// import Button from './Button/Button'

// const App = () => {

//   const yellowButton =() =>{
//     alert("clickme to login");
//   };
//   const redButton =() =>{
//     alert("you have logged in successfully");
//   };
//     const coralButton =() =>{
//     alert("Logged out successfully")
//   }

//   return (  //in return always you should return html
//     <div>
//       <Button backgroundColor="yellow" buttonText="Clickme" click={yellowButton} />
//       <Button backgroundColor="red" buttonText="Login" click={redButton}/>
//       <Button backgroundColor="lightcoral" buttonText="Logout" click= {coralButton} />
//     </div>
//   )
// }

// export default App



//-----------------------Css Understanding purpose

import React from 'react'
import Greetings from './Greetings/Greetings'
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Greetings/>
    </div>
  )
}
 export default App;
 

