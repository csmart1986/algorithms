// use objects or sets to collect values/frequencies of values that you can then compare

// fx that takes 2 positive integer.  Find out if the 2 numbers have the same frequency of digits.
        // input = int1, int2
        // output = TRUE if same digit frequency for int1 and int2, else FALSE
        // can integers be different lengths?

function sameFrequency(int1, int2) {
  const freqCount1 = {};
  const freqCount2 = {};
  // need to convert int => str in order to iterate over indiv digits
  const strInt1 = String(int1);
  const strInt2 = String(int2);
  // if integers are different lengths, cannot have same digit frequency
  if (strInt1.length !== strInt2.length) return false; 
  // Loop 1 = for each digit in strInt1, initialize it as a key in freqCount1 and set the value to 1 or ++1 if already exists in freqCount1
  for (let i = 0; i < strInt1.length; i++) {
    const currElem = strInt1[i];
    freqCount1[currElem] = (freqCount1[currElem] || 0) + 1 
  };
  // Loop 2
  for (let i = 0; i < strInt2.length; i++) {
    const currElem = strInt2[i];
    freqCount2[currElem] = (freqCount2[currElem] || 0) + 1 
  };
  // Loop 3 = check if each digit in freqCount1 is a key in freqCount2 AND that the values (frequencies) match 
  for (let key in freqCount1) {
      if (freqCount1[key] !== freqCount2[key]) return false;
  };
  return true;
}

sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(22, 222) // false

// Time complexity => O(3n) where n is length of arrays (3 b/c 3 loops)  => simplifies to O(n)