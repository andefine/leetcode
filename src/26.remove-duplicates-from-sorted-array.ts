/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let i1 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i1]) {
      i1 += 1;
      if (i1 !== i) {
        nums[i1] = nums[i];
      }
    }
  }

  return i1 + 1;
}
// @lc code=end

const nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums1));
console.log(nums1);
