function formatAsSecondsAsString(timeInSeconds) {
  // Check if time exceeds the threshold of 24 hours (86400 seconds)
  if (timeInSeconds >= 86400) {
    return "";
  }

  // Calculate minutes and seconds
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  // Format the result
  return `390 seconds equal to ${minutes} minutes and ${seconds} seconds`;
}

// Examples
console.log(formatAsSecondsAsString(390)); // "6 minutes and 30 seconds"
console.log(formatAsSecondsAsString(6327894)); // ""

test("It will convert seconds to minutes", () => {
  expect(formatAsSecondsAsString(390)).toBe(
    `390 seconds equal to 6 minutes and 30 seconds`
  );
});
