## Regular Expressions usually "regex" or "regexp" are patterns that helps in find, match and replace text in a string. Are very powerful, but can be easily confunsig.

```JavaScript
/**
 * Regular Expressions are powerfull matching tools, usually written betweeen slashes, like /regex/
 * They are used to find patterns in text.
 * The test method is used to test if a string matches a regular expression, is used regex.test(string) and return a boolean.
 * Is possible to use the alternation operator | in the regex to look for multiple alternatives.
 * Afther the slash in the regex is possible to use modifiers, the first is i to ignore case.
 * the match method is used to find the first match of a regular expression in a string, is used regex.match(string) and return an array with the match or null if not found.
 * Another modifier is g to match all, instead of stopping at the first match will search for all matches.
 * The wildcard, dot or period is a char used in the regex when is unknown all the characters wanted, so it can be used to match any pattern
*/

const str = "Hello World";

const regex = /Hello/;
const test = regex.test(str);       // true

const regexOr = /Hello|Jello/;
const test = regexOr.test(str);     // true

const regexI = /HELLO/i;
const test = regexI.test(str);      // true, without the i modifier it would be false

const match = str.match(regex);     // ["Hello"]

const regexG = /repeat/gi;          // g global, i ignore case
const str = "REPEAT in uppercase, repeat in lowercase, RepeAt, Repeat"
const match = str.match(regexG);   // ["Repeat", "Repeat", "Repeat", "Repeat"]

const str = "run in the sun to have some fun and make some pun with nun and bun"
const regex = /.un/gi;
const match = str.match(regex);    // ["run", "fun", "pun", "nun", "bun"]

/**
 * Until now we only have saw literal patterns, but it's possible to be more flexible.
 * Using character classes, we can match any character in the class, definig then insine square brackets.
 * Is possible to match ranges too, like [a-z] or [0-9] or [^a-z] or [^0-9], the ^ is used to negate the class (negated character sets).
 * And combine ranges, like all alphanumeric characters are found by /[a-z0-9]/
 * The + modifier is used to match characters which occur one or more times in a row. And is used without the brackets.
 * The * modifier is used to match characters which occur zero or more times in a row. And is used without the brackets.
 */

const str = "A big bag of a bug begged to bog";
const regexClass = /b[aeiou]g/gi;
const match = str.match(regexClass);    // ["bag", "big", "bug", "beg", "bog"]

const str = "Like any other constant in math, Pi is a very excentric and beautiful one and is approximately 3.14159265359";
const notVowelOrNumber = /[^aeiou0-9]/gi;
const match = str.match(notVowelOrNumber);  // return ['L', 'k', ' ', 'n', 'y', ' ', 't', 'h', 'r', ' ', 'c', 'n', 's', 't', 'n', 't', ' ', 'n', ' ', 'm', 't', 'h', ',', ' ', 'P', ' ', 's', ' ', ' ', 'v', 'r', 'y', ' ', 'x', 'c', 'n', 't', 'r', 'c', ' ', 'n', 'd', ' ', 'b', 't', 'f', 'l', ' ', 'n', ' ', 'n', 'd', ' ', 's', ' ', 'p', 'p', 'r', 'x', 'm', 't', 'l', 'y', ' ', '.']

const regex = /a+/gi;
const match "a a a".match(regex);       // ["a", "a", "a"]
const match "aa a aa".match(regex);     // ["aa", "a", "aa"]
const match "aaa".match(regex);         // ["aaa"]

const goRegex = /go*/gi;
const match = "Gooooooooooooooooooal!".match(goRegex);      // ["Goooooooooooooooooo"]
const match = "Gut fellings".match(goRegex);                // ["G"]
const match = "fly me to the moon".match(goRegex);          // null
```