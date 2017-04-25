// Start by prompting your user to enter a sentence. Then, store the sentence in a variable and print it to the console.

var userInput = prompt("Enter a sentence to decide your fate!");
console.log(userInput);

// Next, create a function that will take the first and last letter of the sentence, capitalize them, and return this as a new string.

var capitalizeInput = function(input) {
  var firstLetter = input.charAt(0).toUpperCase();
  var lastLetter = input.charAt(input.length-1).toUpperCase();
  // var middleInput = input.slice(1, input.length-1);
  return firstLetter + lastLetter;
};

console.log(capitalizeInput(userInput));

// Create another function that will reverse the order of these two letters and return the result.

var reverseFirstLast = function(input){
  var firstLetter = input.charAt(0).toUpperCase();
  var lastLetter = input.charAt(input.length-1).toUpperCase();
  return lastLetter + firstLetter;
};

console.log(reverseFirstLast(userInput));
// Create a third function that calls the other two functions you've just created. For example, if I enter the sentence "I am a sentence", it should enter your first function (which should output "IE"), then call your second function, passing in the output value from the previous. It would return "EI" to me.

// Add code to your third function to concatenate the new two-letter string together with the original phrase. It should add the two-letter string at the end, forming the final result "I am a sentenceEI."

var displayInput = function(input){
  var output = capitalizeInput(input);
  output = reverseFirstLast(output);
  return input + output;
};

console.log(displayInput(userInput));

// Create a fourth function to count the number of letters in the original sentence, divide it by two (rounding down if necessary), and output the letter at this index. Concatenate this letter at the beginning of the original sentence. For example, if "I am a sentence" is my original input, and it has 15 total characters in it. If I divide this by 2, I get 7.5, which rounds down to 7. The letter at the 7th position in the sentence is "s". So my final result is "sI am a sentenceEI".

var doMath = function(input){
  var sentence = displayInput(input);
  var count = Math.floor(input.length / 2);
  return input.charAt(count) + sentence;
};

console.log(doMath(userInput));
