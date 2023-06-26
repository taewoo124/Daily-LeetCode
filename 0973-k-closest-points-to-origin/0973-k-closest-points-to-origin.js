/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const distances = points.map((point) => {
        return {
            distance: point[0]*point[0] + point[1]*point[1],
            point: point
        };
    });

    distances.sort((a, b) => a.distance - b.distance);

    const result = [];

    for (let i = 0; i < k; i += 1) {
        result.push(distances[i].point);
    }


    return result;
};