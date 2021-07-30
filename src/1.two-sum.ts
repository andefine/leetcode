/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const m = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const complement = target - n;
    const another = m.get(complement)
    if (m.has(complement) && another !== i) {
      return [another, i]
    }
    m.set(n, i);
  }
  return []
};
// @lc code=end

