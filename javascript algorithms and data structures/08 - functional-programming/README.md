## Functional programming is another popular paradigm, which consists in writing the code into smaller and more basic functions which can be combined.
## Here you'll see about pure functions, how to avoid mutations and how to write cleaner code.

```JavaScript
/**
 * Functional Programming consist is making functions simple and isolated, without effects outside the function scope.
 * 
 * The pillars of functional programming are:
 * 1. Isolated functions - there is no dependence on the state of the program, global variables that are subject to change are included.
 * 2. Pure functions - the same input always give the same output
 * 3. Functions with limited side effects - any changes or mutations to the state of the program outside a function are controled
 * 
 * Some terminology
 * > callbacks are function which are slipped or passed into another functions to decide the invocation of that function.
 * > first class functions are an abstraction to say that functions are like any other data type, they can be assigned to variable,
 * passed to another functions or returned, in JavaScript every function is a first class function.
 * > high order functions are those which take a function as an argument or return as a return value.
 * > lambda function are those which are passed as an argument or returned as a return value.
 */

/**
 * Imperative programming is the oldest and most popular paradigm, but functional programming is a type of declaritive programming.
 * And most common errors present in the imperative programming can be avoided in declarative programming once following the pillar ideias.
 * In imperative programming is send to the computer a list of statements to perform a task. Often those statements change the state of the program.
 * But in functional programming is told to the computer what is to be done by calling methods.
 * For example in JavaScript to iterate over an array in imperative you would use a for loop in declaretive you would use the map method.
 * In this case is possible to get errors by trying to access indexes past the last index, while using the map method this erro can't occur.
 * Another example is whit slice and splice, they do almost the same thing, but splice modify the state the program and in many times will lead to errors.
 * One of the core principles in functional programming is prevent mutations, changes be they a global variable or the function argument can lead to bugs.
 * A mutation is any change in the program state, the outcome of a mutation is a side effect and all functions must be free of side effects, that is a pure function.
 * One important habit in functional programming is to always declare explicity dependencies,
 * that is if a function need a variable beign present then pass the variable directly into de the function as a parameter.
 * Always remember to create the copy of the variuables locally inteas of using them directly from the global scope,
 * and rember to objects just doing "let newArr = arr" is not enough. Any computation inside the function depends only on the arguments passed to the function.
 * But this is only the begin, the main focus of functional programming is the theory of functions.
 * In JavaScript functions are first class object, that is they behave like to any another object, they can be passed to a function and be returned too, and this
 * is one of the most important things to functional programming.
 */

/**
 * About high order functions, first of all the map function for arrays, defined in Array.prototype.map.
 * map is a method which iterates over the array and return a new array with the result of calling the callback function in each element of the original array.
 * Every callback function in map can have up to three parameters, the first is the elemtn itself, the second is the index of the element and
 * the thid the is the array upon which the map method is called.
 * 
 * filter is another one from Array.prototype, filter is very similar to map, but only return the items of the array which meets a condition or are truthy.
 * filter is so similar to map, even the arguments are the same. Only punctuating that the second (index) and third (original array) arguments are optional in both.
 * 
 * Another one is slice, it's from Array.prototype too, and have two optional arguments, the first is were begin to slice and the second were end (non-inclusive).
 * With slice you get a copy of the original array, if you don't pass any argument slice will copy the entire array.
 * And the second argument were the slice end be non-inclusive means that the element at that index will be not copied.
 * Like arr.slice(1,2) will only copy the element in the index 1.
 * 
 * Another from Array.prototype is concat, concat have only one paramenter which is mandatory and is an array. For example arr1.concat(arr2).
 * concat will return a new array without mutating the original ones and the new array will be the concatenation of the originals.
 * Like [1,2].concat([3,4]) will return [1,2,3,4] without modifying [1,2] or [3,4].
 * concat will work like the push method too, instead of passing an array you could only a number or string as argument and the concat will place the item
 * at the end of the array, but again without modifying the original, that is concat will copy the original array then place the new item at the end.
 * 
 * reduce is another from Array.prototype and the most general, solve most of the array processing problems.
 * reduce it's a more generalized format of both map and filter methods,reduce will iterate over an array and return only one value,
 * like the biggest value or the sum of all values of the array.
 * The callback for reduce accepts up to four arguments, the first is the accumulator which is the result of the previous iteration, the second is the current item,
 * the third is the index of the current item and the fourth is the original array itself. reduce have a second argument beside the callback function, which is the
 * initial value for the accumulator. If the initial value for the accumulator it's not specified then the first item of the array is passed to the accumulator and
 * the callback function is skipped, that is the callback function will be not called upon the first item and only will be called the second element and ahed.
 * reduce like map or filter can return objects too.
 */

// example of map method
const numbers = [0, 1, 2, 3, 4];
const doubleNum = (num) => 2 * num;
const newNumbers = numbers.map(doubleNum);  // newNumbers is equal to [0, 2,  4, 6, 8]
const alternativeDoubleNum = (num, index, arr) => 2 * arr[index];
const alternativeNewNumbers = numbers.map(alternativeDoubleNum);    // newNumbers is equal to [0, 2,  4, 6, 8]
const filteredNumbers = numbers.filter(num => num % 2);             /**
                                                                     * filteredNumbers is equal to [0, 2, 4], the callback function valuate true for even numbers
                                                                     * so gilter only will return those numbers from numbers which are even.
                                                                     */
const slicedArray = filteredNumbers.slice(2,4);         // slicedArray is equal to [4,6]
const concatenatedArray = numbers.concat([5, 6, 7]);    // concatenatedArray will be [0, 1, 2, 3, 4, 5, 6, 7], and numbers still be [0, 1, 2, 3, 4]
const newConcatenated = concatenatedArray.concat(9);    // newconCatenated will be [0, 1, 2, 3, 4, 5, 6, 7, 9] and concatenatedArray still [0, 1, 2, 3, 4, 5, 6, 7]
const sumOfNumbers = numbers.reduce((sum, num) => sum + num, 0);    // sumOfNumbers is equal to 10
const sumOfNumbers = numbers.reduce((sum, num) => sum + num);       // sumOfNumbers is equal to 10

/**
 */

/**
 */

/**
 */
```