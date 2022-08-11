import { useGrossProfitMargin } from "./useGrossProfitMarginCalculator";
const mockData=[
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
      },
      {
        "account_currency": "AUD",
        "account_identifier": "959af5f4-9925-44e8-b283-7ddf4b427238",
        "account_status": "ACTIVE",
        "value_type": "debit",
        "system_account": "",
        "total_value": 31.5,
        "account_category": "expense",
        "account_code": "404",
        "account_name": "Bank Fees",
        "account_type": "overheads",
        "account_type_bank": ""
      }
];
const mockRevenue:number = 1000;
describe("use gross profit margin calculator",()=>{
    it("returns current initial value, revenue", () => {
        expect(useGrossProfitMargin(mockData,mockRevenue)).toEqual("0.0");
    })
})