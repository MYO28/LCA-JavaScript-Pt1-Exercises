// ── Loops ─────────────────────────────────────────────────────────────────────

const numbers = [1, 2, 3, 4, 5];

// ── 1. for loop — print each number in the array ─────────────────────────────
console.log("--- for loop ---");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// ── 2. while loop — countdown from 5 to 1 ────────────────────────────────────
console.log("--- while loop countdown ---");
let count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}

// ── 3. for loop — print only even numbers ────────────────────────────────────
console.log("--- even numbers ---");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

// ── 4. for loop — calculate the sum of all numbers ───────────────────────────
console.log("--- sum ---");
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log("Sum of all numbers: " + sum);
