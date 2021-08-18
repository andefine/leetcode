/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let i = 0;
  let j = nums.length - 1;
  while (i <= j) {
    if (nums[i] === val) {
      nums[i] = nums[j];
      j--;
    } else {
      i++;
    }
  }
  return i;
}
// @lc code=end

const a1 = [3, 2, 2, 3];
console.log(removeElement(a1, 3), a1);
const a2 = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(a2, 2), a2);
const a3 = [1];
console.log(removeElement(a3, 1), a3);
