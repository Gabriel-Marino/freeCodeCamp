##

```JavaScript
/**
 * Sum All Numbers in a Range
 * 
 * We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
 * The lowest number will not always come first.
 * 
 * For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 */
function sumAll(arr)
{
    const arrCopy = arr.slice();
    const compareFunction = (a,b) => a - b;
    const arrSort = arrCopy.sort(compareFunction);
    const [first, last] = arrSort;
    const map2Index = (_, i) => i;
    const reduceSum = (acc, num) => acc + num;
    return new Array(last + 1).fill(1, first, last + 1)
                              .map(map2Index)
                              .reduce(reduceSum);
}

/**
 * Diff Two Arrays
 * 
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 * In other words, return the symmetric difference of the two arrays.
 * 
 * Note: You can return the array with its elements in any order.
 */
function diffArray(arr1, arr2)
{
    const arr = [].concat(arr1).concat(arr2);
    const newArr = [];
    arr.sort().sort((a, b) => a - b);
    arr.map((item, index, arr) => {
        if (item !== arr[index + 1] && item !== arr[index - 1]) newArr.push(item);
    });
    return newArr;
}

/**
 * Seek and Destroy
 * 
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
 * Remove all elements from the initial array that are of the same value as these arguments.
 * 
 * Note: You have to use the arguments object.
 */
function destroyer(arr, ...args)
{
    const filter = arr.filter(item => !args.includes(item))
    return filter;
}

/**
 * Wherefore art thou
 * 
 * Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
 * 
 * For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
 */
function whatIsInAName(collection, source)
{
    const arr = [];
    // Only change code below this line
    const sourceKeys = Object.keys(source);
    const filterFunc = object => {
        const mapFunc = key => object.hasOwnProperty(key);
        return sourceKeys.map(mapFunc).every(val => val);
    };
    const possibleObjects = collection.filter(filterFunc);

    const mapFunc = obj => {
        const mapFunc = key => obj[key] === source[key];
        const condition = sourceKeys.map(mapFunc).every(val => val);
        if (condition) arr.push(obj);
    };
    possibleObjects.map(mapFunc);
    // Only change code above this line
    return arr;
}

/**
 * Spinal Tap Case
 * 
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */
function spinalCase(str)
{
    return str.replace(/\W|_|(?=[A-Z])/g, "-").replace(/--/g, "-").replace(/^-/, "").toLowerCase();
    // return str.split(/\W|_|(?=[A-Z])/g).join("-").toLowerCase();
}

/**
 * Pig Latin
 * 
 * Pig Latin is a way of altering English Words. The rules are as follows:
 * - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
 * - If a word begins with a vowel, just add way at the end.
 */
function translatePigLatin(str)
{
    const vowelRegExp = /^[aeiou]/gi;
    const consoRegExp = /^[bcdfghjklmnpqrstvwxyz]+/gi;
    const newStr = vowelRegExp.test(str) ?
        str + "way" :
        str.replace(consoRegExp, "") + str.match(consoRegExp) + "ay";
  return newStr;
}

/**
 * Search and Replace
 * 
 * Perform a search and replace on the sentence using the arguments provided and return the new sentence.
 * 
 * First argument is the sentence to perform the search and replace on.
 * Second argument is the word that you will be replacing (before).
 * Third argument is what you will be replacing the second argument with (after).
 * 
 * Note: Preserve the case of the first character in the original word when you are replacing it.
 * For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
 */
function myReplace(str, before, after)
{
    const regexp = new RegExp(before);
    const newAfter = /^[A-Z]/.test(before) ?
        after[0].toUpperCase() + after.slice(1) :
        after.toLowerCase();
    return str.replace(regexp, newAfter);
}

/**
 */

/**
 */

/**
 */

/**
 */

/**
 */

/**
 */

/**
 */

/**
 */

/**
 */

/**
 */

/**
 */

/**
 */

/**
 */

/**
 */
```