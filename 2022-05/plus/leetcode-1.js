/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
// 本题和offer-2-006题一样 换种解题思路
// 两次循环遍历 通过两数之和相加等于target 找到下表
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i,j];
      }
    }
  }
};