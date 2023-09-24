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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let result = 0;
    
    function depth(node) {
      if (!node) return 0;

      const leftDepth = depth(node.left);
      const rightDepth = depth(node.right);

      result = Math.max(result, leftDepth + rightDepth);

      return Math.max(leftDepth, rightDepth) + 1;
    }

    depth(root);
  
    return result;
};