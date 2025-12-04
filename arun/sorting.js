const numbers = [30, 20, 10, 50, 40];

numbers.sort((a, b) => a - b);
console.log(numbers);

const fruits = ["apple", "elderberry", "cherry", "date", "banana"];
fruits.sort();
console.log(fruits);

const students = [
  { name: "manpreet", age: 21 },
  { name: "jaskaran", age: 22 },
  { name: "harman", age: 23 },
  { name: "arun", age: 20 },
  { name: "jagdeep", age: 24 },
];
students.sort((a, b) => a.age - b.age);
console.log(students);
