/**
 * 重复题
 * 
 */

/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
  const res = Array(n+1).fill(0)
  for(let i=0;i<=n;i++){
      let j = i
      while(j!=0){
        res[i]++
        j =j&(j-1)
    }
  }
  return res
};