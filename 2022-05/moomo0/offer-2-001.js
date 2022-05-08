/**
 * 用减法模拟除法
 * js中整数范围为Math.pow(-2, 31)到Math.pow(2, 31)-1
 * 那么最小负整数转正数则会溢出，最大正整数转负数则不会，先做溢出处理
 * 判断正负
 * 遍历减
 * 加上符号
 * 时间复杂度O(n)
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var divide = function(a, b) {
  if (a === -Math.pow(2, 31) && b === -1) {
      return Math.pow(2, 31) - 1;
  }
  const isFu = a * b < 0 ? true:false;
  let res = 0;
  a = Math.abs(a)
  b = Math.abs(b)
  while(a>=b){
    a = a-b;
    res++
  }
  return isFu?-res:res;
};

/**
 * 二分法
 * 暴力减时间复杂度为O(n)，可以使用二分法进行优化
 * 由于正数转负数不会溢出，因此转为负数进行计算
 * 用val保存除数b,a如果小于等于val的2倍开始遍历
 * val成倍相加,quot则为2+4+8.。。+1
 * 时间复杂度O(logn)
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var divide = function(a, b) {
  if (a === -Math.pow(2, 31) && b === -1) {
      return Math.pow(2, 31) - 1;
  }
  const isFu = a * b < 0 ? true:false;
  let res = 0;
  if(a>0)a=-a
  if(b>0)b=-b
  while(a<=b){
    let val = b
    let quot = 1
    while(a <= val+val){
        quot+=quot
        val+=val
    }
    res+=quot
    a -= val
  }
  return isFu?-res:res;
};