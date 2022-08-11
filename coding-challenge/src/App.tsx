import "./App.css";
import { useFetchData } from "./Hooks/useFetchData";
import { useRevenueCalculator } from "./Hooks/useRevenueCalculator";
import { useExpenseCalculator } from "./Hooks/useExpenseCalculator";
import { useGrossProfitMargin } from "./Hooks/useGrossProfitMarginCalculator";
import { useNetProfitMargin } from "./Hooks/useNetProfitMarginCalcualtor";

function App() {
  const data = useFetchData();
  const totalRevenue = useRevenueCalculator(data);
  const totalExpense = useExpenseCalculator(data);
  const grossProfitMargin = useGrossProfitMargin(
    data,
    totalRevenue.revenueToUse
  );
  const netProfitMargin = useNetProfitMargin(
    totalExpense.expenseToUse,
    totalRevenue.revenueToUse
  );

  return (
    <div className="App">
      <h1>9Spokes Coding-Challenge:</h1>
      <h5>Revenue:${totalRevenue.totalRevenue}</h5>
      <h5>Expense:${totalExpense.totalExpense}</h5>
      <h5>Gross Profit Margin:{grossProfitMargin}%</h5>
    </div>
  );
}

export default App;
