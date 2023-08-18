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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  
  const result: number[][] = [];
  const queue: (TreeNode | null) [] = [root];
  
  while (queue.length) {
    const currentLevel: number[] = [];
    const levelLength = queue.length; // 순회중에 queue.shift()로 인해 길이가 변경되므로 값을 결정후 진행
    
    for (let i = 0; i < levelLength; i += 1) {
      const currentNode = queue.shift();
      
      if (currentNode) {
        currentLevel.push(currentNode.val);
        
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
    }
  
    result.push(currentLevel);
  }
  
  return result;
};