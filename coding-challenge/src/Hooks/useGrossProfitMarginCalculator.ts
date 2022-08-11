export const useGrossProfitMargin = (data:any[],revenue:number) => {
    let totalSales:number = 0;
    data.forEach(item=>{
        //Calculate total sales
        if(item.account_category === "sales" && item.value_type === "debit"){
            totalSales += item.total_value;
        }
    })
    console.log(totalSales);
}