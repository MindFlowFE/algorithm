/**
 * @param {number[]} nums
 * @return {number}
 */
// 本题同样使用new map（） 哈希结构去存储 数组所有下标的前缀和 
 var pivotIndex = function(nums) {
 const map = new Map();
 const len =  nums.length;
 // 键设置为-1 值为0解决返回下标为0的情况
 map.set(-1,0).set(0,nums[0]);
  for (let i = 0; i < len; i++) {
      const val = map.get(i-1) + nums[i]
      map.set(i,val)  // 设置所有下标的前缀和
  }
  let sum = map.get(len - 1); // 最后一个下标的前缀和
  for (let i = 0; i < len; i++) {
    const value = map.get(i) // 拿出当前项的前缀和
    if (map.get(i-1) == sum - value) {
      // 当前项的前一项的前缀和 等于 所有和减去当前项的前缀和 即当前项后面项的和 返回当前项
        return i
    }
  }
  return -1;
};