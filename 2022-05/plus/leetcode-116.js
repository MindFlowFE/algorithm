/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  return nums.reduce((a,b)=>a^b)
};
//
var singleNumber = function(nums) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    nums[0] = nums[0] ^ nums[i+1]
  }
  return nums[0];
};