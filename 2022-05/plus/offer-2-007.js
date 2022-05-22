/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 使用双指针的方法 先对数组进行排序 将中间数nums[i]固定 和两边 nums[left] nums[right] 两个指针进行对比
 var threeSum = function(nums) {
  nums.sort((a,b) => a-b);
  var res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }; 
    let left = i + 1
    let right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum == -nums[i]) {
            res.push([nums[i], nums[left], nums[right]]);
            while (left < right && nums[left] == nums[left + 1]) {left++};
            left++; 
            while (left < right && nums[right] == nums[right - 1]) {right--};
            right--;
        } else if (sum > -nums[i]) {
            right--
            } else {
              left++
            };
    }
  }
  return res;
};