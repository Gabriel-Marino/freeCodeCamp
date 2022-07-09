/**
 * WORK IN PROGRESS
 * telephoneCheck should receive an american telephone number and return a boolean. Check if the number is valid or not.
 * Now keep falling in the tests of "5555555555", "555-555-5555" and "(555)555-5555" because these number's don't have the country code
 * and they're considered valid.
 * And keep failing in the test of "1 555)555-5555" because of the lack of the opening parenthesis and it's not considered valid.
 */

function telephoneCheck(number)
{
    // is needed that number is a string
    if (typeof number !== 'string') number.toString();
    const COUNTRYCODEVALIDATOR = /((^|\D)^[+]?1(\D|$))/;
    const NUMBERWITHOUTCOUNTRYCODE = number.replace(COUNTRYCODEVALIDATOR, '').replace(/\W/g, '');
    const NUMBERVALIDATOR = /\d{10,}/;
    return (COUNTRYCODEVALIDATOR.test(number) && NUMBERVALIDATOR.test(NUMBERWITHOUTCOUNTRYCODE));
}

// The key is the number to be tested and the value is the expected result.
const DATATEST = {
        "1 555-555-5555": true,
        "1 (555) 555-5555": true,
        "5555555555": true,
        "555-555-5555": true,
        "(555)555-5555": true,
        "1(555)555-5555": true,
        "555-5555": false,
        "5555555": false,
        "1 555)555-5555": false,
        "1 555 555 5555": true,
        "1 456 789 4444": true,
        "123**&!!asdf#": false,
        "55555555": false,
        "(6054756961)": false,
        "2 (757) 622-7382": false,
        "0 (757) 622-7382": false,
        "-1 (757) 622-7382": false,
        "2 757 622-7382": false,
        "10 (757) 622-7382": false,
        "27576227382": false,
        "(275)76227382": false,
        "2(757)6227382": false,
        "2(757)622-7382": false,
        "555)-555-5555": false,
        "(555-555-5555": false,
        "(555)5(55?)-5555": false,
        "55 55-55-555-5": false,
        "11 555-555-5555": false,
};

// compare the return from telephoneCheck with the expected value extensively
Object.keys(DATATEST).map(key => console.log(`The telephoneCheck evaluate to ${telephoneCheck(key)}. The value should be ${DATATEST[key]}.`));

// every log should be true, testing if the return value is the expected value.
Object.keys(DATATEST).map(key => console.log(telephoneCheck(key) === DATATEST[key]));