/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/* 
 双指针
 定义两个指针left ，right分别指向数组的第一位和最后一位
 相加 两数之和如果小于target 则left往右移动一位，如果两数之和大于target 则right往左移动一位
 时间复杂度为：O（n）
 空间复杂度为：O（1）
 */
 var twoSum = function(numbers, target) {
   let left = 0;
   let right = numbers.length-1;
   while(left < right){
     const num = numbers[left] + numbers[right];
     if (num == target) {
       return [left , right]
     } else if(num > target){
       right--;
     } else {
       left++;
     }
   }
   return []
};