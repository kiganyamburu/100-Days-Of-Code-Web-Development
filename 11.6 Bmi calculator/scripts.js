//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

let kg = prompt("What is your weight in kg?: ");
let height = prompt("What is your height in meters?: ");

function bmiCalculator(kg, height) {
  let bmi = kg / (height * height);

  console.log ("your bmi is " + bmi);
}
bmiCalculator(kg, height);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
