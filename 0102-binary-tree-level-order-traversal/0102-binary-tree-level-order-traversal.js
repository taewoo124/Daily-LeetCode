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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const result = [];
    
    if (root === null) return result;

    function DFS(node, level) {
        if (node === null) return;
        if (level === result.length) result.push([]);
        result[level].push(node.val);
        
        DFS(node.left, level + 1);
        DFS(node.right, level + 1);
    }

    DFS(root, 0);  // start DFS with root at level 0
    
    return result;
};