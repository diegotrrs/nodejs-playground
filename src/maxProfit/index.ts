export function maxProfit(prices: number[]): number {

  // [7,1,5,3,6,4]

  /*
    min 1
    max 5
        
  */
    let maxProfit = 0
    let minPrice = prices[0]

    for(let i=1; i < prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i]
        } else {
            // if (prices[i]-minPrice > maxProfit){
            //     maxProfit = prices[i]-minPrice
            // }
            maxProfit = Math.max(prices[i]-minPrice, maxProfit)
        }
        //  minPrice = Math.min(minPrice, prices[i])
        //  maxProfit = Math.max(maxProfit, prices[i] - minPrice)

    }
    return maxProfit
  };
