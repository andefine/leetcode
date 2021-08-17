/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// @lc code=start

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const head = new ListNode();
  let cur = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 || l2;
  console.log(head.next);
  return head.next;
}
// @lc code=end

const l1 = new ListNode(1, new ListNode(1, new ListNode(4)));
const l2 = new ListNode(3, new ListNode(4, new ListNode(5)));
console.log(l1);
console.log(l2);
mergeTwoLists(l1, l2);
