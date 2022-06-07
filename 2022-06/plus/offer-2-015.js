/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s1, s2) {
  let len1 = s1.length;
  let len2 = s2.length;
  if (len1 > len2) {
    return false;
  }
  let Arr = [];
  for (let i = 0; i <= 26; i++) {
    Arr.push(i);
  }
  for (let i = 0; i < len1; i++) {
   Arr[s1[i].charCodeAt() - 'a'.charCodeAt()]--;
  }
  let left = 0;
  for (let right = 0; right < len2; right++) {
    const charCode = s2[right].charCodeAt() - 'a'.charCodeAt();
    Arr[charCode]++;
    while (Arr[charCode] > 0) {
      Arr[s2[left].charCodeAt() - 'a'.charCodeAt()]--;
      left++;
    }
    if (right - left + 1 === len1) {
      return true;
    }
  }
  return false;
};