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



const Light = (props) => {
  const handleLightClick = (event) => {
    props.setColor(props.color)
  }

  const className = props.selected === props.color ? "selected" : "";

  return (
    <div className={className}
      style={{ backgroundColor: props.color }}
      onClick={handleLightClick}></div>
  )
}

export default TrafficLighter