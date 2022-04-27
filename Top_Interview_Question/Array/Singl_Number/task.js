/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const len = nums.length
    let res;

    for(let i=0; i<len; i++){
        if(nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])){
            res = nums[i]
            break
        }
    }
    return res;
};
