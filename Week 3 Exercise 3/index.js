const userInput = prompt("Enter a number:");

// Validate user input to ensure it's a valid number
let number;
while (isNaN(userInput)) {
  userInput = prompt("Invalid input. Please enter a number:");
}
number = Number(userInput);

// Check if the number is even or odd using the modulo operator (%)
if (number % 2 === 0) {
  console.log(`${number} is an even number.`);
} else {
  console.log(`${number} is an odd number.`);
}
