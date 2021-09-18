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
      <h1>Desafío CoderHouse - Clase 09/10</h1>
      <p>Tipear letras, en caso de que sea una vocal, que no te deje escribirlo.</p>
      <input onKeyDown={inputHeandler}/>
    </div>
  );
}
