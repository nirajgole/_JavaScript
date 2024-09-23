"use strict";
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];
        const complement = target - currentValue;
        const idx2 = nums.indexOf(complement);
        if (idx2 !== -1 && idx2 !== i) {
            return [i, idx2];
        }
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
