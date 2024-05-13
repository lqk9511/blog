/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let res = 0, _str = '';

  for(let x = 0; x < s.length; x++) {
      if(_str.includes(s[x])) {
        _str = _str.slice(_str.indexOf(s[x]) + 1)
      }
      _str += s[x]
      console.log("🚀 ~ lengthOfLongestSubstring ~ _str:", _str)
      res = Math.max(res,_str.length)
  }
  return res
};

console.log(lengthOfLongestSubstring('abccabcbb'))

