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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) return null;

  const rootVal: number = preorder[0];
  const root: TreeNode = new TreeNode(rootVal);

  const inorderIndex: number = inorder.indexOf(rootVal);

  root.left = buildTree(preorder.slice(1, inorderIndex + 1), inorder.slice(0, inorderIndex));
  root.right = buildTree(preorder.slice(inorderIndex + 1), inorder.slice(inorderIndex + 1));

  return root;
}