import "./App.scss";
import SearchInput from "./components/SearchInput";
import TrafficLighter from "./components/TrafficLighter";


const App = () => {
  return (
    <div className="App">
      <TrafficLighter/>
      <SearchInput />
    </div>
  )
}

export default App;
