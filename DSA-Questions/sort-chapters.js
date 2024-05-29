const chapters = ["1.2.3", "4.3.5", "2.9.0", "4.7.9"];
let chapter2 = chapters.map((chapter) => Number(chapter.split(".").join("")));
let chapter3 = chapter2.sort((a, b) => a - b);
let result = chapter3.map((e) => {
  return e.toString().split("").join(".");
});

console.log(result);

// Airplane Zig-Zag Seat Arrangement

// 1 2 3 | 4 5 6
// W M A | A M W
// 12 11 10 | 9 8 7
// 13 14 15 | 16 17 18
// 24 23 22 | 21 20 19
// 25 26 27 | 28 29 30

// 15 - A
// 17 - M
// 24 - W
// 26 - M
// 30 - W
