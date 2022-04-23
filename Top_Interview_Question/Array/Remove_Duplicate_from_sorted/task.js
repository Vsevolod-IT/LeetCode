// 1 varios
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const len = nums.length
    let space;
    let num;

    for(let i = 0; i < len; i++){

        if (i == 0){
            num = nums[i];
            space = i + 1;
            continue;
        }
        if(num == nums[i]){
            delete nums[i]
            continue;
        }
        if(num != nums[i]){
            num = nums[i]
            nums[space] = num
            space += 1
            delete nums[i]
            continue;
        }
    };
}




// 2 varios
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const len = nums.length
    let num;

    for(let i = len - 1; i >= 0; i--){
        let cur = nums[i]

        if (i == len){
            console.log(i)
            num = cur;
            continue
        }
        if(num != cur){
            num = cur;
            continue
        }
        if(num == cur){
            nums.splice(i,1)
            continue
        }
    }
}


// JS varios
var removeDuplicates = function(nums) {
    return Array.from(new Set(nums))
};
