// Array of names
var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

// Function to select a random name
function whosPaying(names) {
  //Get the total number of people
  var numberOfPeople = names.length;
  //Pick a random person
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  //Get the name of the random person
  var randomPerson = names[randomPersonPosition];
  //Return the name of the random person
  return randomPerson + " is going to buy lunch today!";
}

// Call the function and log the result to the console
console.log(whosPaying(names));
