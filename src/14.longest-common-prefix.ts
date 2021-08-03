/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let res = strs[0] ? strs[0] : '';
  for (const str of strs) {
    let temp = '';
    for (let j = 0; j < str.length; j++) {
      if (str[j] !== res[j]) {
        break;
      }
      temp = `${temp}${res[j]}`;
    }
    res = temp;
  }
  return res;
}
// @lc code=end

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
