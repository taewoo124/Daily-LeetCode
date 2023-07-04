/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    if (root.val > q.val && root.val > p.val) {
        root = lowestCommonAncestor(root.left, p, q);
    }

    if (root.val < q.val && root.val < p.val) {
        root = lowestCommonAncestor(root.right, p, q);
    }

    return root;
};