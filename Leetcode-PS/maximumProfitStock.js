// maxProfit([7, 1, 5, 3, 6, 4]); 
// Output: 5

// maxProfit([7, 6, 4, 3, 1]); 
// Output: 0

function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5