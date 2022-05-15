/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
   let num1 = a.length - 1;
   let num2 = b.length - 1;
   let carry = 0 ;
   let res = ''
   while (num1 >=0 || num2 >=0){
     let x = num1 >= 0 ? a[num1] : 0;
     let y = num2 >= 0 ? b[num2] : 0;
     let z = Number(x) + Number(y) + carry;
     res += (z % 2);
     carry = Math.floor(z / 2);
     num1--;
     num2--;
   }
   if (carry) {
     res += carry;
   };
   return res.split('').reverse().join('')
};