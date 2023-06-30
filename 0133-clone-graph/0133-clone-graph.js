/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let map = new Map();

    function traverse(node) {
        if (!map.has(node.val)) {
            map.set(node.val, new Node(node.val));

            map.get(node.val).neighbors = node.neighbors.map(traverse);
        }
        
        return map.get(node.val);
    }
    
    
    return node ? traverse(node) : node;
};