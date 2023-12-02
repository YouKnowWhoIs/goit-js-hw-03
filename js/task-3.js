console.log("--- task 3 ---");

function filterArray(numbers, value) {
  const finalNum = [];

  for (let a = 0; a < numbers.length; a++) {
    if (numbers[a] > value) {
      finalNum.push(numbers[a]);
    }
  }
  return finalNum;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
