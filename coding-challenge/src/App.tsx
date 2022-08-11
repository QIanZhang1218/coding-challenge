import "./App.css";
import { useFetchData } from "./Hooks/useFetchData";
import { useRevenueCalculator } from "./Hooks/useRevenueCalculator";
import { useExpenseCalculator } from "./Hooks/useExpenseCalculator";
import { useGrossProfitMargin } from "./Hooks/useGrossProfitMarginCalculator";

function App() {
  const data = useFetchData();
  const totalRevenue = useRevenueCalculator(data);
  const totalExpense = useExpenseCalculator(data);
  const grossProfitMargin = useGrossProfitMargin(
    data,
    totalRevenue.revenueToUse
  );

  return (
    <div className="App">
      <h1>9Spokes Coding-Challenge:</h1>
      <h5>Revenue:${totalRevenue.totalRevenue}</h5>
      <h5>Expense:${totalExpense}</h5>
    </div>
  );
}

export default App;
