/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
  const isNegtive = x < 0;
  const str = String(Math.abs(x))
  let resStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    resStr = `${resStr}${str[i]}`
  }
  const res = Number(resStr);
  const mTemp = Math.pow(2, 31);
  if (!isNegtive && res < mTemp - 1) return res;
  if (isNegtive && -res > -mTemp) return -res;
  return 0
};
// @lc code=end

