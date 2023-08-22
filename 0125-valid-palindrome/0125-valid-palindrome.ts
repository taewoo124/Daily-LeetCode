function isPalindrome(s: string): boolean {
  let cleanedString = '';

  for (const char of s) {
    if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
      cleanedString += char.toLowerCase();
    }
  }

  const reversedString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedString;
};
