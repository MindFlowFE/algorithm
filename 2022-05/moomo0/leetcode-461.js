/**
 * 直接异或可以得到不同的位
 * 然后开始数位1的位数，就可以得到结果
 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
  let s = x^y;
  let res = 0;
  while(s!=0){
      res += s&1
      s = s>>1
  }
  return res;
};