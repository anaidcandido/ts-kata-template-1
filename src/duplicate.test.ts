import duplicate from "./duplicate";

/* test("sum adds two numbers", () => {
  expect(sum(4, 3)).toBe(7);
});
*/

test("duplicate", () => {
  expect(duplicate([10, 20, 30])).toStrictEqual([10, 20, 30, 10, 20, 30]);
});
test("duplicate", () => {
    expect(duplicate(["screen", "apple", "banana", "keybord"])).toStrictEqual(["screen", "apple", "banana", "keybord", "screen", "apple", "banana", "keybord"]);
  });
  test("duplicate", () => {
    expect(duplicate([1, "water", 3, 4])).toStrictEqual([1, "water", 3, 4, 1, "water", 3, 4]);
  });
