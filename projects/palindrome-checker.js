function palindrome(word) {
  const LOWERCASEWORD = word.toLowerCase();
  const ONLYALPHAWORD = LOWERCASEWORD.replace(/[^a-z0-9]/gi, '');

  const REVERSEDWORD = ONLYALPHAWORD.split("").reverse().join("");

  return ONLYALPHAWORD === REVERSEDWORD;
}
