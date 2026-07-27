let numbers = [10, 20, 30, 40, 50];

let filtered = numbers.filter(num => num > 25);
console.log("Filter:", filtered);

let found = numbers.find(num => num == 30);
console.log("Find:", found);

let check = numbers.some(num => num > 45);
console.log("Some:", check);

let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Reduce:", sum);