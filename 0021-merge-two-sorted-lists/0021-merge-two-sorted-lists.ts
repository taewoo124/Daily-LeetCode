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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode(-Infinity);
  
  let prev = dummy;
  let current1 = list1;
  let current2 = list2;
  
  while (current1 && current2) {
    if (current1.val <= current2.val) {
      prev.next = current1;
      prev = current1;
      current1 = current1.next;
    } else {
      prev.next = current2;
      prev = current2;
      current2 = current2.next;
    }
  }
  
  if (current1) prev.next = current1;
  if (current2) prev.next = current2;
  
  return dummy.next;
};