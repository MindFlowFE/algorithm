/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
   let res = x ^ y ; 
   let count = 0;
   while (res > 0) {
     res = res & (res - 1);
     count++;
   }
   return count;
};