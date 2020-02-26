const passmark = require("../index");

//valid should be what is returned
// test("is the mark is a number", () => {
//   //   expect(typeof passmark.marks).toBe("number");
//   //   expect(typeof passmark.subject).toBe("string");
//   expect(passmark.isValidate()).toBe(true);
// });

test("is the mark above the passmark", () => {
  expect(passmark.computeScore()).toBe("B");
});
