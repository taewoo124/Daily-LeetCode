/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numMap = {};
    
    for(let i = 0; i < nums.length; i++){
        if(numMap[nums[i]] !== undefined){
            return true;
        }
        numMap[nums[i]] = i;
    }
    
    return false;
};