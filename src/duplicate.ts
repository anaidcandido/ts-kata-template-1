function duplicate(inputArray: any[]): any[] {
  let RESULT = inputArray;
  RESULT.push(...inputArray);
  return RESULT;
}

console.log(duplicate([10, 20, 30]), "should return [10, 20, 30, 10, 20, 30]");
console.log(
  duplicate(["screen", "apple", "banana", "keybord"]),
  "should return ['screen', 'apple', 'banana', 'keybord', 'screen', 'apple', 'banana', 'keybord']",
);
console.log(
  duplicate([1, "water", 3, 4]),
  'should return [1, "water", 3, 4, 1, "water", 3, 4]',
);
export default duplicate;
