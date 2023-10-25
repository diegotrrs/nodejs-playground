
export function maxProfit(prices: number[]): number {
  let profit = 0;
  let stock = prices[0];
  for(let i = 1; i < prices.length; i++)
  {
      if(stock < prices[i]){
          profit += prices[i] - stock;
      }
      stock = prices[i]
  }
  return profit;
};