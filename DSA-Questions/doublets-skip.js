// [1,2,2,2,3,1,3,4]
// [4]

function takeSingles(arr) {
  let objElements = {};
  arr.map((e) => {
    if (objElements[e]) {
      objElements[e]++;
    } else {
      objElements[e] = 1;
    }
  });

  let result = [];
  for (const key in objElements) {
    if (objElements[key] === 1) {
      result.push(Number(key));
    }
  }

  return result;
}

console.log(takeSingles([1, 2, 2, 2, 3, 1, 3, 4]));
// [4]
