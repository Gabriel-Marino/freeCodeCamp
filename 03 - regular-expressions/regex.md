## regex stands for Regular Expressions
regex = /expression/
new RegExp('expression', modifiers)

#### modifiers:
* g global matches, find all rather than stopping in the first
* i case-insensitive matching
* m mutiline matching

#### expressions:
* [abcd] find any in the brackets
* [^abc] find any NOT in the brackets
* [0-9]  find any in the bracket, 0-9 reffer to the number set [0,9]
* [^a-z] find any NOT in the brackets, a-z reffer to all alphabet
* (x|y)  find any of the alternatives x or y

**example** /[^a-z0-9]/gi is to find all non alphanumeric characters
