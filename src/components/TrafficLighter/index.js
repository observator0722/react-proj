import "./TrafficLighter.scss"
import { useState } from "react";

const TrafficLighter = () => {

  const [selectedColor, setSelectedColor] = useState('');

  const getClassNameForColor = (color) => {
    return selectedColor === color ? "selected" : ""
  }

  const handleClickForColor = (color) => {
    return e => {
      setSelectedColor(color)
    }
  }

  return (
    <div className="TrafficLighter">
      <div className={getClassNameForColor("red")}
        style={{ backgroundColor: "red" }}
        onClick={handleClickForColor("red")}></div>
      <div className={getClassNameForColor("yellow")}
        style={{ backgroundColor: "yellow" }}
        onClick={handleClickForColor("yellow")}></div>
      <div className={getClassNameForColor("green")}
        style={{ backgroundColor: "green" }}
        onClick={handleClickForColor("green")}></div>
    </div>
  )
}

export default TrafficLighter