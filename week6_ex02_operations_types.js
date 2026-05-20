// ── Numbers & Type Conversion ─────────────────────────────────────────────────

// Two numbers to work with
const number1 = 8;
const number2 = 3;

// Convert number1 to a string using String()
const number1AsString = String(number1);

// Basic math operations
const sum = number1 + number2; // addition
const product = number1 * number2; // multiplication

// Print all results
console.log("number1:          " + number1);
console.log("number2:          " + number2);
console.log(
  "number1 as string:" +
    number1AsString +
    " (type: " +
    typeof number1AsString +
    ")",
);
console.log("sum:              " + sum);
console.log("product:          " + product);
