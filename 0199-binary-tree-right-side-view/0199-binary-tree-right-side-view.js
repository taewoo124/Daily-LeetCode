/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  
  const queue = [root];
  const result = [];

  while (queue.length) {
    const size = queue.length;
    let lastValue;
    
    for (let i = 0; i < size; i++) {
      let currentValue = queue.shift();

      lastValue = currentValue.val;
      
      if (currentValue.left) queue.push(currentValue.left);
      if (currentValue.right) queue.push(currentValue.right);
    }
    
    result.push(lastValue);
  }
  
  return result;
};