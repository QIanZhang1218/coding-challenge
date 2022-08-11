export const useExpenseCalculator = (data:any[]) => {
    let totalExpense:number = 0;
    data.forEach(item=>{
        //when account category equals tp 'expense', add the relative total value to totalExpense
        if(item.account_category === "expense"){
            totalExpense += item.total_value;
        }
    })
    return{
        expenseToUse:Math.floor(totalExpense),
        totalExpense:Math.floor(totalExpense).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    } 
}