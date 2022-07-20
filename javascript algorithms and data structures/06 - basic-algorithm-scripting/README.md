```JavaScript
function convertCtoF(celsius)
{
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

function reverseString(str)
{
    return str.split("").reverse().join("");
}

function factorialize(num)
{
    if (num < 0) return "Factorial operation is only applicable to positive integer numbers.";
    if (num <= 1) return 1;
    return new Array(num).fill(0).map((_, i)=> i+1).reduce((num, prod) => prod *= num);
}

function findLongestWordLength(str)
{
    const biglen = str.split(" ")
                      .map((word) => {
                        return word.length;
                      })
                      .reduce((num, buf) => {
                        if (num > buf)
                        {
                            return num;
                        } else {
                            return buf;
                        }
                      });
    // return str.split(" ").filter(word => word.length === biglen).join(""); // this will return the rod with the biggest length;
    // return `biggest word: ${}, lenght: ${}.`
    return biglen;
}

function largestOfFour(arr)
{
    return arr.map(subarr => subarr.reduce((num, buf) => {
        if (num > buf)
        {
            return num;
        } else {
            return buf;
        }
    }));
}

function confirmEnding(str, target)
{
    return new RegExp(target + '$').test(str);
}

function repeatStringNumTimes(str, num)
{
    if (num < 0) return "";
    return new Array(num).fill(str).join("");
}

function truncateString(str, num)
{
    if (str.length > num) return str.split("")
                                    .filter((char, index) => {
                                        if (index < num) return char;
                                    })
                                    .join("") + "...";
    return str;
}
```