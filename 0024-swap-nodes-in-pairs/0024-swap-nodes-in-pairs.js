/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) return head;
  
  const dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy
  
  while (current.next && current.next.next) {
    let firstTail = current.next;
    let secondTail = current.next.next;
    
    current.next = secondTail;
    firstTail.next = secondTail.next;
    secondTail.next = firstTail;
    current = current.next.next;
  }
  
  const result = dummy.next;
  
  return result;
};