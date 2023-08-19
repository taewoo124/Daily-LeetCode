function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  
  const rows: string[] = Array(numRows).fill("");
  
  let count: number = 0;
  let direction: boolean = true;
  
  for (const char of s) {
    rows[count] += char;
    
    if (count === 0 || count === numRows - 1) {
      direction = !direction;
    }
    
    count += direction ? -1 : 1;
  }
  
  return rows.join("");
};