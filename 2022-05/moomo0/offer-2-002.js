/**
 * 看似是一个二进制题，实际类似大数相加
 * 考虑好进位
 * 与大数相加区别是以2进位
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  let n = a.length - 1
  let m = b.length - 1
  let carry = 0
  const res = []
  while(n >= 0 || m >= 0){
      const digitA = n >= 0 ? Number(a[n--]) : 0
      const digitB = m >= 0 ? Number(b[m--]) : 0
      let sum = digitA + digitB + carry;
      carry = sum >= 2 ? 1 : 0
      sum = sum >= 2 ? sum-2 : sum
      res.push(sum)
  }
  if(carry){
    res.push(carry)
  }
  return res.reverse().join('')
};
