// fx that accepts an object and returns an array of all values in object that have type string
  // does order matter in the array?  yes
  // what if there are no strings or an empty object? return []

function collectStrings(inputObj) {
    let strArr = []; // cant be const b/c will redefine later
    for (let key in inputObj) {
        // base case -> value is type string so add value to array
        if (typeof inputObj[key] === 'string') {
            strArr.push(inputObj[key]);  
        }
        // recursive case -> value is another object, make fx call on that nested object, then combine the resulting array with values already in strArr
        else {
            strArr = strArr.concat(collectStrings(inputObj[key]));
        };
    };
    // return array of strings at end or [] if no string values
    return strArr;  
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
collectStrings({}) // []
collectStrings({data: 1}) // []