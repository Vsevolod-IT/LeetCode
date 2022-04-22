/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let ar = []
    for(let i of accounts) {
        let result = i.reduce((sum, current) => sum + current, 0);
        ar.push(result);
    }

    let res = Math.max.apply(null, ar);
    return res;
};
