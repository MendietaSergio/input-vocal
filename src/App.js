import React from "react";
import "./style.css";

export default function App() {
  const vocal = ["a","e","i","o","u"]
  const inputHeandler=(e)=>{
    // e.preventDefault()
    vocal.map(element => {
      if(e.key===element){
        e.preventDefault()
      }
  })  
}
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input onKeyDown={inputHeandler}/>
    </div>
  );
}
