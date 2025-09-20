import  Sum  from "../Sum.jsx";

test("sum function should calculate the sum of the two numbers", () => {
  const result = Sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
