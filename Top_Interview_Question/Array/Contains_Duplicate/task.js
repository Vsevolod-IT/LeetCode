/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let test = Array.from(new Set(nums))
    return (test.length != nums.length)
};
