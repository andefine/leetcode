/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ]);
  const stack = [];
  for (const char of s) {
    if (map.has(char)) {
      stack.push(char);
    } else if (char === map.get(stack[stack.length - 1])) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
}

// @lc code=end

console.log('()', isValid('()'));
console.log('()[]{}', isValid('()[]{}'));
console.log('(]', isValid('(]'));
console.log('([)]', isValid('([)]'));
console.log('{[]}', isValid('{[]}'));
