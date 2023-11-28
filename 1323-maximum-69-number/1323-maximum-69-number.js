/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  const str = [...num.toString()];
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "6") {
      str[i] = "9";
      break;
    }
  }
  
  const result = Number(str.reduce((acc, cur) => acc + cur));
  
  return result;
};