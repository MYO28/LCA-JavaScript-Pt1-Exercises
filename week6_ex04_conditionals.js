// ── Conditional Logic ────────────────────────────────────────

const score = 85;
const passingGrade = 60;

if (score === 100) {
  console.log("Perfect score! You got 100!");
} else if (score >= passingGrade) {
  console.log("Passed! Your score is " + score);
} else {
  console.log(
    "Failed. Your score is " +
      score +
      ". You need " +
      passingGrade +
      " to pass.",
  );
}
