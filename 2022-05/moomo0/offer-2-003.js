/**
 * 使用i&(i-1)计算1的个数，保证最右边为0
 * 111&110=110  110&101=100 100&011=0 进行了3次，所以1的个数为3
 */

/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
  const res = Array(n+1).fill(0)
  for(i=0;i<=n;i++){
      let j = i
      while(j!=0){
          res[i]++
          j =j&(j-1)
      }
  }
  return res
};

/**
 * 使用i&(i-1)保证最右边为0
 * i比i&(i-1)的1的个数多1
 */
/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
  const res = Array(n+1).fill(0)
  for(i=1;i<=n;i++){
      res[i] = res[i&(i-1)]+1
  }
  return res
};
