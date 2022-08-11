import { useExpenseCalculator } from "./useExpenseCalculator";

const mockData=[
    {
        "account_category": "revenue",
        "account_code": "200",
        "account_currency": "AUD",
        "account_identifier": "e2bacdc6-2006-43c2-a5da-3c0e5f43b452",
        "account_status": "ACTIVE",
        "value_type": "credit",
        "account_name": "Sales",
        "account_type": "sales",
        "account_type_bank": "",
        "system_account": "",
        "total_value": 32431.0
      },
      {
        "account_code": "400",
        "account_currency": "AUD",
        "account_identifier": "d392fe47-c99d-499e-a200-46709dd6b6e7",
        "account_name": "Advertising",
        "account_status": "ACTIVE",
        "system_account": "",
        "value_type": "debit",
        "account_category": "expense",
        "account_type_bank": "",
        "total_value": 1830.18,
        "account_type": "overheads"
      }
]
describe("useExpenseCalculator",()=>{
    it("returns current initial value, expense", () => {
        expect(useExpenseCalculator(mockData)).toEqual({"expenseToUse": 1830, "totalExpense": "1,830"});
    })
})