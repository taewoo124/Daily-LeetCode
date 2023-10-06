/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  const reverseLinkedList = (list) => {
    let prev = null;
    let current = list;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  };

  const linkedListToString = (list) => {
    let str = '';
    let current = list;

    while (current !== null) {
      str = str + current.val;
      current = current.next;
    }

    return str;
  };

  const stringToLinkedList = (str) => {
    const node = new ListNode();
    let current = node;

    for (let i = str.length - 1; i >= 0; i--) {
      current.next = new ListNode(parseInt(str[i]));
      current = current.next;
    }

    return node.next;
  };

  l1 = reverseLinkedList(l1);
  l2 = reverseLinkedList(l2);

  const num1 = BigInt(linkedListToString(l1));
  const num2 = BigInt(linkedListToString(l2));

  const sum = (num1 + num2).toString();

  return stringToLinkedList(sum);
};
