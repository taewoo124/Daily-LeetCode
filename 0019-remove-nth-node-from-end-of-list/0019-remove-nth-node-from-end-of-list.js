/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const reverseLinkedList = (node) => {
  let prev = null;
  let current = node;
  let next = null;
  
  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  node = prev;
  
  return node;
}

const removeNthFromEnd = function(head, n) {
  let reverse = reverseLinkedList(head);
  let dummy = new ListNode(0, reverse);
  let temp = dummy;
  
  
  for (let i = 0; i < n - 1; i++) {
    temp = temp.next;
  }
  
  if (temp && temp.next) {
    temp.next = temp.next.next;
  }
  
  const result = reverseLinkedList(dummy.next);
  
  return result;
};