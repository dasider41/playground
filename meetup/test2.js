const arr = [
  "apple",
  [
    "banana",
    "strawberry",
    "apple",
    ["banana", "strawberry", "apple", ["banana", "strawberry", "apple"]]
  ]
];

const countItems = (arr, item) =>
  arr.flat(Infinity).filter(val => val === item).length;

console.log(countItems(arr, "apple") === 4);
