/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  let t = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const cur = map.get(s[i]);
    const last = map.get(s[i + 1]);
    if (last && cur < last) {
      t -= cur;
      continue;
    }
    t += map.get(s[i]);
  }

  return t;
}
// @lc code=end

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
