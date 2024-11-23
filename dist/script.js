//Task2: Calculate sum and average
function sumAndAverage(numbers) {
  const totalSum = numbers.reduce((acc, num) => acc + num, 0);
  const average = totalSum / numbers.length;
  return { totalSum, average };
}
// Example
const numbers = [1, 2, 3, 4];
const result = sumAndAverage(numbers);
console.log("Total Sum:", result.totalSum);
console.log("Average:", result.average);


//Task3: Remove duplicates in constant time complexity
function removeDuplicates(array) {
    return Array.from(new Set(array));
}
// Example 
const strings = ['apple', 'banana', 'apple', 'orange', 'banana'];
const uniqueStrings = removeDuplicates(strings);
console.log('Unique values:', uniqueStrings);
