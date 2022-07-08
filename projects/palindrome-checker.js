function palindrome1(word) {
  const LOWERCASEWORD = word.toLowerCase();
  const ONLYALPHANUMEICCHAR = LOWERCASEWORD.replace(/[^a-z0-9]/gi, '');

  const REVERSEDWORD = ONLYALPHANUMEICCHAR.split("").reverse().join("");

  return ONLYALPHANUMEICCHAR === REVERSEDWORD;
}

function palindrome2(word) {
  const LOWERCASEWORD = word.toLowerCase();
  const LOWERCASELETTERS = LOWERCASEWORD.match(/[a-z0-9]/gi);

  const REVERSEDLETTERS = LOWERCASELETTERS.slice().reverse();

  const [WORD, REVERSEDWORD] = [LOWERCASELETTERS.join(""), REVERSEDLETTERS.join("")];

  return WORD === REVERSEDWORD;
}

const DATATEST = [
  "eye",                              // true
  "_eye",                             // true
  "race car",                         // true
  "not a palindrome",                 // false
  "A man, a plan, a canal. Panama",   // true
  "never odd or even",                // true
  "nope",                             // false
  "almostomla",                       // false
  "My age is 0, 0 si ega ym.",        // true
  "1 eye for of 1 eye.",              // false
  "0_0 (: /-\ :) 0-0",                // true
  "five|\_/|four",                    // false
];

console.log(DATATEST.map(palindrome1));
console.log(DATATEST.map(palindrome2));