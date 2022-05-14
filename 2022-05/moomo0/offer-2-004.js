/**
 * 本题相同的数恰出现 三次，那么我们记录每一位相加，如果该位能被3整除则，为相同数
 * 不能被整除，我们将其加起来则得到结果
 * 先用bitnums收集32位上每一位的加和，(nums[i]>>(31-j)) & 1可以得到该位为1还是0
 * 然后遍历每一位%3，余数不为0，则是与其他数不同的那个结果，可以进行累加
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    const bitnums = Array(32).fill(0)
    const n = nums.length
    for(let i=0;i<n;i++){
        for(let j=0;j<32;j++){
            bitnums[j] += (nums[i]>>(31-j)) & 1
        }
    }
    let res = 0
    for(let j=0;j<32;j++){
        res = (res<<1) + bitnums[j] % 3
    }
    return res
};
