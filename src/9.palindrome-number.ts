/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

function isPalindrome1(x: number): boolean {
  if (x < 0) return false;
  const s = x.toString().split('').reverse().join('');
  return Number(s) === x;
}

// @lc code=start
function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let temp = x;
  let reverted = 0;
  while (reverted < temp) {
    const last = temp % 10;
    temp = Math.floor(temp / 10);
    reverted = reverted * 10 + last;
  }
  return reverted === temp || Math.floor(reverted / 10) === temp;
}
// @lc code=end

console.log(121, isPalindrome(121));
console.log(-121, isPalindrome(-121));
console.log(10, isPalindrome(10));
console.log(-101, isPalindrome(-101));
console.log(1, isPalindrome(1));
