import { useNetProfitMargin } from "./useNetProfitMarginCalculator";
const mockRevenue = 10000;
const mockExpense = 1000;
describe("use gross profit margin calculator",()=>{
    it("returns current initial value, net profit margin", () => {
        expect(useNetProfitMargin(mockExpense,mockRevenue)).toEqual("90.0");
    })
})