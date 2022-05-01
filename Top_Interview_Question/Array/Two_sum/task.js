/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0;
    let len = nums.length
    const ar = []

    while(i<len){

        for(let j = 0; j < len; j++){
            if(i === j){
                continue
            } else if((nums[i] + nums[j]) === target) {
                ar.push(i,j)
                return ar
            }
        }

        i++
    }
};
