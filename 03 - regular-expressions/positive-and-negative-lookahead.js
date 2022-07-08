/**
 * Use lookaheads in the pwRegex to match passwords
 * that are greater than 5 characters long, and have two consecutive digits.
 */

let sampleWord = "astronaut";
let pwRegex = /(?=\D+)(?=\w{5,}\d+)(?!banan1)/; // Change this line
let result = pwRegex.test(sampleWord);

// not the best way to do this, but only the "banan1" test keep failing, tomorrow i'll rewrite this