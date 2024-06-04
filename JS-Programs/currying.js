function outer(a) {
  return function inner(b) {
    return function innermost(c) {
      return a + b + c;
    };
  };
}

console.log(outer(2)(3)(4)); // 9
console.log(outer(3, 4)(5)); // 12
