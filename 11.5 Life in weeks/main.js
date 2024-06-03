function lifeInWeeks(currentAge) {
  // Define constants
  const totalLifetime = 90;
  const daysInYear = 365;
  const weeksInYear = 52;
  const monthsInYear = 12;

  // Calculate remaining time
  const remainingYears = totalLifetime - currentAge;
  const remainingDays = remainingYears * daysInYear;
  const remainingWeeks = remainingYears * weeksInYear;
  const remainingMonths = remainingYears * monthsInYear;

  // Output the result
  console.log(
    `You have ${remainingDays} days, ${remainingWeeks} weeks, and ${remainingMonths} months left.`
  );
}

// Example usage:
const currentAge = 25;
lifeInWeeks(currentAge);
