/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
/*
 * 滑动窗口 
 滑动窗口【i，j】 遍历s2
 如果 Arr【x】 大于0 就减小窗口 计算窗口大小 如果符合s1 则符合结果返回true
 */
 var checkInclusion = function(s1, s2) {
  let len1 = s1.length;
  let len2 = s2.length;
  const arr = new Array(26).fill(0);
  if (len1 > len2) {
    return false;
  }
  for (const item of s1) {
    --arr[item.charCodeAt() - 'a'.charCodeAt()]
  }
  for (let i = 0,j = 0; j < len2; j++) {
    const x = s2[j].charCodeAt() - 'a'.charCodeAt();
    ++arr[x];
    while (arr[x] > 0) {
      --arr[s2[i++].charCodeAt() - 'a'.charCodeAt()]
    }
    if (j-i+1 == len1) {
      return true;
    }
  }
  return false;
};