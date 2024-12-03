 01.
**Answer:** A function to convert Celsius to Fahrenheit<br>

function celsiusToFahrenheit(celsius) {
  return (celsius*9)/5+32;
}
let celsius = 20;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(fahrenheit); // output: 68


 02.
**Answer:** A function to check if a number is even<br>

function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); // output: true
console.log(isEven(7)); // output: false


 03.

**Answer:** A function to sum two numbers<br>
function sum(a, b) {
  return a+b;
}
console.log(sum(3, 4)); // output: 7
console.log(sum(10, 20)); // output: 30


 04.
**Answer:** A function to find the smallest number in an array<br>

function findSmallestNum(arr) {
  return Math.min(...arr);
}
console.log(findSmallestNum([3, 5, 1, 9])); // output: 1
console.log(findSmallestNum([-1, -5, 0, 10])); // output: -5

 05.
**Answer:** A function to count the number of vowels in a string<br>

function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).length;
}
console.log(countVowels("hello world")); // output: 3
console.log(countVowels("Javascript")); // output: 3

 06.
**Answer:** A function to get the first element of an array<br>

function getFirstElement(arr) {
  return arr[0];
}
console.log(getFirstElement([1, 2, 3])); // output: 1
console.log(getFirstElement(["a", "b", "c"])); // output: a

 07.
**Answer:** A function to check if an array is empty<br>

function isArrayEmpty(arr){
  return arr.length === 0;
}
console.log(isArrayEmpty([])); // output: true
console.log(isArrayEmpty([1, 2, 3])); // output: false

 08.
**Answer:** A function to return the factorial of a number<br>

function factorialize(num){
  if (num === 1 || num === 0) return 1;
  return num * factorialize(num - 1);
}
console.log(factorialize(5)); // output: 120
console.log(factorialize(7)); // output: 5040

 09.
**Answer:** A function to reverse a string<br>

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // output: "olleh"
console.log(reverseString("world")); // output: "dlrow"

10.

**Answer:** A function to convert a string to lowercase<br>

function toLowerCase(str) {
  return str.toLowerCase();
}
console.log(toLowerCase("HELLO WORLD")); // output: "hello world"
console.log(toLowerCase("JavaScript")); // output: "javascript"

 11.

**Answer:** A function to find the length of a string<br>

function stringLength(str) {
  return str.length;
}
console.log(stringLength("hello")); // output: 5
console.log(stringLength("world")); // output: 5

 12.

**Answer:** A function to merge two arrays<br>

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // output: [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b"], ["c", "d"])); // output: ["a", "b", "c", "d"]

 13.
**Answer:** A function to get the last element of an array<br>

function getLastElement(arr) {
  return arr[arr.length - 1];
}
console.log(getLastElement([1, 2, 3])); // output: 3
console.log(getLastElement(["a", "b", "c"])); // output: c

 14.
**Answer:** A function to get the first character of a string<br>

function getFirstCharacter(str) {
  return str[0];
}
console.log(getFirstCharacter("hello")); // output: h
console.log(getFirstCharacter("world")); // output: w

 15.
**Answer:** <br>

function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}
console.log(sumArray([1, 2, 3, 4])); // output: 10
console.log(sumArray([-1, -2, -3, -4])); // output: -10
console.log(sumArray([1.5, 2.5, 3.5])); // output: 7.5

