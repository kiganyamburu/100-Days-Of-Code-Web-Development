function bmiCalculator(weight, height) {
  return interpretation;
  let bmi = weight / Math.pow(height, 2);
  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  }
  if (bmi > 18.5 && bmi <= 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }
}
bmiCalculator(60, 1.2);
