import { useWorkingCapitalRatio } from "./useWorkingCapitalRatioCalculator";

const mockData=[
    {
        "account_category": "assets",
        "account_code": "610",
        "account_type": "current_accounts_receivable",
        "account_type_bank": "",
        "account_currency": "AUD",
        "account_identifier": "3dd5c80d-e109-4313-8c61-41648e33704f",
        "account_name": "Accounts Receivable",
        "account_status": "ACTIVE",
        "system_account": "DEBTORS",
        "value_type": "debit",
        "total_value": 10749.5
    },
    {
        "account_type": "current_accounts_payable",
        "system_account": "CREDITORS",
        "value_type": "credit",
        "account_category": "liability",
        "account_code": "800",
        "account_identifier": "8e9c5166-d3fe-4e21-827a-f42753568e80",
        "account_name": "Accounts Payable",
        "account_status": "ACTIVE",
        "account_currency": "AUD",
        "account_type_bank": "",
        "total_value": 3434.06
    }
]

describe("useExpenseCalculator",()=>{
    it("returns current initial value, expense", () => {
        expect(useWorkingCapitalRatio(mockData)).toEqual("313.0");
    })
})