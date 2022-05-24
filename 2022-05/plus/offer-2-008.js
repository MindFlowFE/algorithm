/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// 使用滑动窗口 left到right 为窗口 当左边的数据滑出窗口时 窗口总和变小 右边数据滑出窗口时 窗口总和变大
// 窗口从左t到右 和小于target 右边增加一位 总和大于target时 左边减少一位
// 满足窗口条件 与已知最小值比较 记录最小的窗口位置
 var minSubArrayLen = function(target, nums) {
  let minLen = 0;
  let left = 0;
  let right = 0;
  let sum = nums[right]
  while (left < nums.length && right < nums.length){
    if (sum < target) {
      sum = sum + nums[++right];
    } else if (sum >= target) {
      if (minLen === 0 || right - left + 1 < minLen) {
        minLen = right - left + 1
      }
      sum = sum - nums[left++]
    }
  }
  return minLen;
};