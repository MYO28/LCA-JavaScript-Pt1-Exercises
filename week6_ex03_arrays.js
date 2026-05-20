// ── Array Basics ──────────────────────────────────────────────────────────────

// Create an empty array
let colors = [];

// Add three colors using push() — adds to the END of the array
colors.push("red");
colors.push("blue");
colors.push("green");
console.log("After push():", colors); // ["red", "blue", "green"]

// Create an array with five numbers (declared with values straight away)
const numbers = [10, 20, 30, 40, 50];

// Remove the last color using pop() — removes from the END
colors.pop();
console.log("After pop():", colors); // ["red", "blue"]

// Add a new color to the BEGINNING using unshift()
colors.unshift("yellow");
console.log("After unshift():", colors); // ["yellow", "red", "blue"]

// Print the length of both arrays
console.log("colors length:  " + colors.length); // 3
console.log("numbers length: " + numbers.length); // 5
