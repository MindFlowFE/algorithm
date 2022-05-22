/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let number = nums[0];
  let max = number;

  for (let i = 1; i < nums.length; i++) {
      if (number <= 0) {
          number = nums[i];
      } else {
          number += nums[i];
      }
      max = Math.max(number, max);
  }
  return max;
};