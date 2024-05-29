// removeFalsyValues([0, 1, false, 2, '', 3, null, 'a']);
// Output: [1, 2, 3, 'a']

// removeFalsyValues([undefined, NaN, 'Hello', '', true]);
// Output: ['Hello', true]

const falsyValues = [false, 0, "", null, undefined, NaN];

function removeFalsyValues(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!falsyValues.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeFalsyValues([0, 1, false, 2, "", 3, null, "a"]));
