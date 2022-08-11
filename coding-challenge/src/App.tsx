import "./App.css";
import { useFetchData } from "./Hooks/useFetchData";

function App() {
  const data = useFetchData();
  return (
    <div className="App">
      <h1>9Spokes Coding-Challenge:</h1>
    </div>
  );
}

export default App;
