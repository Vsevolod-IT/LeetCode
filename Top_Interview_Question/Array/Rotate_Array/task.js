/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
 let cp = nums.slice();
    for(let i = 0; i < nums.length; i++){
        nums[(i+k) % nums.length] = cp[i]
    }
};
