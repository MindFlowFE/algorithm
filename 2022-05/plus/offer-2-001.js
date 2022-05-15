/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var divide = function(a, b) {
   const min = -Math.pow(2,31);
   const max = Math.pow(2,31)-1;

   if (a == min && b == -1) {
     return max;
   }
   let num = 0;
   if (b == min) {
     return a == b ? 1 : 0;
   }
   if (a == min) {
     a = a - Math.abs(b);
     num = num + 1;
   }

   const sign = (a > 0) ^ (b > 0) ? -1 : 1 ; 
   a = Math.abs(a);
   b = Math.abs(b);

   for (let i = 31; i >=0; i--) {
     if( (a >>> i) - b >= 0) {
       a = a - (b << i)
       if (num > max - (1 << i)) {
         return min
       }
       num = num + (1 << i)
     }
     
   }
   if (num == -2147483648) return -2147483648
   return sign == 1 ? num : -num

};