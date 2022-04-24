/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length
    let profit = 0;

    for(let i = 0; i < len; i++){
        if(prices[i] > prices[i-1]){
            profit += prices[i] - prices[i-1]
        }
    }
    return profit
};
