/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
  var res = [];
  var arr = [];
  for (var i = 0; i<=n; i++) {
      var sum=0
      res = i.toString(2).split('');
      for(var j=0;j<res.length;j++){ 
        if (res[j]==1) {
            sum++
        }
      }
      arr.push(sum)
  }
  return arr
};