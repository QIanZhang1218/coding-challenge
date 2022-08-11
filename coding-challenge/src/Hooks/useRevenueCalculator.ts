export const useRevenueCalculator = (data:any[]) => {
    let totalRevenue : number = 0
    data.forEach(item=>{
        if(item.account_category === "revenue"){
            totalRevenue += item.total_value;
        }
    })
    console.log(totalRevenue);
    return totalRevenue;
}