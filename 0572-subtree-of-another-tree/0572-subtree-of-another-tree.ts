/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) return false;
  if (isSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
  if (!tree1 && !tree2) return true;
  if (!tree1 || !tree2) return false;
  if (tree1.val !== tree2.val) return false;

  return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
}