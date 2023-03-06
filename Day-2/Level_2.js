// Using console.log() print out the following statement:

// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
// Using console.log() print out the following quote by Mother Teresa:

// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

// Check if 'on' is found in both python and jargon

// I hope this course is not full of jargon. Check if jargon is in the sentence.

// Generate a random number between 0 and 100 inclusively.

// Generate a random number between 50 and 100 inclusively.

// Generate a random number between 0 and 255 inclusively.

// Access the 'JavaScript' string characters using a random number.

// Use console.log() and escape characters to print the following pattern.

// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

// Question

// Using console.log() print out the following statement:

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

// Using console.log() print out the following quote by Mother Teresa:

console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let num_1 = "10";
let num_2 = 10;

console.log(typeof num_1 === typeof num_2);

num_1 = +num_1;
console.log(typeof num_1 === typeof num_2);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let num_3 = "9.8";
let num_4 = 10;

console.log(num_3 === num_4);
num_3 = parseFloat(num_3);
num_3 = parseInt(num_3);
console.log(num_3 === num_4);

// Check if 'on' is found in both python and jargon

const word_1 = "python";
const word_2 = "jargon";
console.log(word_1.includes("on") && word_2.includes("on"));

// I hope this course is not full of jargon. Check if jargon is in the sentence.

let word_3 = "I hope this course is not full of jargon";

console.log(word_3.includes("jargon"));

// Generate a random number between 0 and 100 inclusively.

console.log(Math.floor(Math.random() * 100 + 1));

// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 50 + 1));

// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 255 + 1));

// Access the 'JavaScript' string characters using a random number.

let word = "javascript";
let rand = Math.floor(Math.random() * word.length());
console.log(word[rand]);

// Use console.log() and escape characters to print the following pattern.

console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

const sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.substr(31, 23));
