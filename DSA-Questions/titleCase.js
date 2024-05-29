// toTitleCase("hello world");
// Output: "Hello World"

// toTitleCase("javascript is awesome");
// Output: "Javascript Is Awesome"

function toTitleCase(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

// str = "hello world";
// ["hello", "world"]
// ["Hello", "World"]
// "Hello World"
