/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    var arr = [];
    for (let i = 0; i < n+1; i++) {
      let count = 0;
      var temp = i.toString(2);
      for (let j = 0; j < temp.length; j++) {
        if (temp[j] == 1) {
          count++;
        }
      }
      arr[i] = count;
    }
    return arr;
};