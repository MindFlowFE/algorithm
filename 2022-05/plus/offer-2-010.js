/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//  循环这个数组 计算第i项之前的累加和 在减去k
// 使用哈希表来储存 如果哈希表里存在这个累加的和 就给结果值加1

// 新知识 new Map() 基础用法
/* 
以[键，值]的形式进行存储

size 返回结构中成员的总数 

set（key，value） 设置键名key，对应的value 返回整个Map结构
如果key已经有值，则键值会被更新，否则就新生成该键
同时返回的是当前Map对象，可采用链式写法

get（） 读取key中对应的value 找不到就返回undefined

has（） 返回一个布尔值 表示某个键是否在当前的Map结构中

delete（） 删除某个键 ， 返回布尔值 成功true 失败 false；
 */
 var subarraySum = function(nums, k) {
  const map = new Map(); // 声明一个哈希表
  map.set(0,1) // 初始化哈希表的键和值
  const len = nums.length;
  let sum = 0; // 累加的值
  let res = 0;
  for (let i = 0; i < len; i++) {
    sum = sum + nums[i];
    res= res + map.get(sum - k) || 0 ;  // 如果哈希表里面有个值 即sum - k = 0  返回他的值 1 ；res+1
    let val = (map.get(sum) || 0) + 1  // 将值储存下来
    map.set(sum, val); // 设置哈希表内的键值
  }
  return res;
};