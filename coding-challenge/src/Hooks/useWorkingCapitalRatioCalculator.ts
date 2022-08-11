export const useWorkingCapitalRatio = (data:any[]) =>{
    let assets : number= 0;
    let creditAssets:number = 0;
    let debitAssets:number = 0;
    let liabilities:number = 0;
    let creditLiability:number = 0;
    let debitLiability:number = 0;
    data.forEach(element=>{
        //calculate assets
        if(element.account_type === "current" || "bank" || "current_accounts_receivable"){
            //calculate debit assets;
            if(element.account_category==="assets" && element.value_type === "debit"){
                debitAssets += element.total_value;
            }
            //calculate credit assets
            else if(element.account_category==="assets" && element.value_type === "credit"){
                creditAssets += element.total_value;
            }
            //calculate credit liabilities
            else if(element.account_category==="liability" && element.value_type === "credit"){
                creditLiability += element.total_value;
            }
            //calculate debit liabilities
            else if(element.account_category==="liability" && element.value_type === "debit"){
                debitLiability += element.total_value;
            }
        }
        
        //total assets equals to debitAssets subtract creditAssets
        assets = debitAssets - creditAssets;
        //total liabilities equals to credit liabilities subtract debit liabilities
        liabilities = creditLiability - debitLiability;
    });
    return ((assets/liabilities*100).toFixed(1));
}