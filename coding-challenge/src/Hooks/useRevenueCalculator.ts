export const useRevenueCalculator = (data:any[]) => {
    let totalRevenue : number = 0
    data.forEach(item=>{
        //when account category equals tp 'revenue', add the relative total value to totalRevenue
        if(item.account_category === "revenue"){
            totalRevenue += item.total_value;
        }
    })
    return Math.floor(totalRevenue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}