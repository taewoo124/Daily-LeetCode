/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;

    const arr = new Array(n + 1);
    arr[1] = 1;
    arr[2] = 2;

    for (let i = 3; i <= n; i += 1) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr.pop();
}