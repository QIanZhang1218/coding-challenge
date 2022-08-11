import "./App.css";
import { useFetchData } from "./Hooks/useFetchData";
import { useRevenueCalculator } from "./Hooks/useRevenueCalculator";

function App() {
  const data = useFetchData();
  const totalRevenue = useRevenueCalculator(data);
  return (
    <div className="App">
      <h1>9Spokes Coding-Challenge:</h1>
      <h5>Revenue:${totalRevenue}</h5>
    </div>
  );
}

export default App;
