/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  const stringArray = nums.map((num) => num.toString());
  
  const sortedArray = stringArray.sort((a, b) => {
    const order1 = a + b;
    const order2 = b + a;
    
    return order2.localeCompare(order1);
  });
  
  if (stringArray[0] === "0") return "0";

  const result = sortedArray.join("");

  return result;
};