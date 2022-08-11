export const useNetProfitMargin = (expense:number,revenue:number) => {
    return (((revenue-expense)/revenue*100).toFixed(1));
}