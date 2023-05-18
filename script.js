// Task 1
let userString = prompt("Введіть перший рядок: ");
let userStringTwo = prompt("Введіть другий рядок: ");
let userStringThree = prompt("Введіть третій рядок: ");

let userStrings = userString.concat(", ", userStringTwo, ", ", userStringThree);

console.log(userStrings);

// Task 2
let number = 12345;

let digits = String(number).split("");

console.log(digits.join(" "));
