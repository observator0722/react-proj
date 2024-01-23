import "./TrafficLighter.scss"
import { useState } from "react";



const TrafficLighter = () => {
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div className="TrafficLighter">
      <Light color="red" selected={selectedColor} setColor={setSelectedColor} />
      <Light color="yellow" selected={selectedColor} setColor={setSelectedColor} />
      <Light color="green" selected={selectedColor} setColor={setSelectedColor} />
    </div>
  )
}



const Light = ({
  setColor,
  color,
  selected
}) => {
  const handleLightClick = (event) => {
    setColor(color)
  }

  const className = selected === color ? "selected" : "";

  return (
    <div className={className}
      style={{ backgroundColor: color }}
      onClick={handleLightClick}></div>
  )
}

export default TrafficLighter





//var a, b, rest; примеры синтаксиса деструктуризации
//[a, b] = [1, 2];
//console.log(a); // 1
//console.log(b); // 2

//let a, b, rest;
//[a, b] = [1, 2];
//console.log(a);
//console.log(b);

//[a, b, ...rest] = [1, 2, 3, 4, 5];
//console.log(a); // 1
//console.log(b); // 2
//console.log(rest); // [3, 4, 5]



//({ a, b } = { a: 1, b: 2 });
//console.log(a); // 1
//console.log(b); // 2



//({ a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 });
//console.log(a); // 1
//console.log(b); // 2
//console.log(rest); // { c:3, d:4 }


//import React, {useState} from "react";
//function Example () {
  //[count, setCount] = useState (0);
//}

//const Example () => {
  //const [count, setCount] = useState (0);
//}

// spread operator



// let [a0, a1, ...aRest] = []


// let obj = {name: "Ihor", citizenship: {city: "Wroclaw", country: "PL" }}


// let {name, citizenship: {country}} = obj;

// console.log(name) // Ihor
// console.log(country) // PL

// <Comp name="ihor" age="24" />

// const Comp = ({name, age}) => {
//   return (<span>Hello {name}</span>)
// }
