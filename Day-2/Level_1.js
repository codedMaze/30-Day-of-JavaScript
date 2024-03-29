// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// Print the string on the browser console using console.log()
// Print the length of the string on the browser console using console.log()
// Change all the string characters to capital letters using toUpperCase() method
// Change all the string characters to lowercase letters using toLowerCase() method
// Cut (slice) out the first word of the string using substr() or substring() method
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// Check if the string contains a word Script using includes() method
// Split the string into an array using split() method
// Split the string 30 Days Of JavaScript at the space using split() method
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// Use match() method to find all the a’s in 30 Days Of JavaScript
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// Use repeat() method to print 30 Days Of JavaScript 2 times

// Question
// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

var challenge = "30 Days Of JavaScript";

// Print the string on the browser console using console.log()

console.log(challenge);

// Print the length of the string on the browser console using console.log()

console.log(challenge.length);

// Change all the string characters to capital letters using toUpperCase() method

challenge = challenge.toUpperCase();

// Change all the string characters to lowercase letters using toLowerCase() method

challenge = challenge.toLowerCase();

// Cut (slice) out the first word of the string using substr() or substring() method

challenge = challenge.substring(0, 2);

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.

challenge = challenge.substring(2);

// Check if the string contains a word Script using includes() method

challenge = challenge.includes("Script");

// Split the string into an array using split() method

challenge = challenge.split();

// Split the string 30 Days Of JavaScript at the space using split() method

challenge = challenge.split(" ");

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let cloudCoded = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
cloudCoded = cloudCoded.split(",");

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method

challenge = challenge.replace("JavaScript", "Python");

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method

console.log(challenge.charAt(15));

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

console.log(challenge.charCodeAt(11));

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

console.log(challenge.indexOf("a"));

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript

console.log(challenge.lastIndexOf("a"));

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let index =
  "You cannot end a sentence with because because because is a conjunction";
console.log(index.indexOf("because"));

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(index.lastIndexOf("because"));

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(challenge.search("because"));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g'30 Days Of JavaScript '.

console.log(challenge.trim());

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.startsWith("30"));

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true

console.log(challenge.endsWith("Javascript"));

// Use match() method to find all the a’s in 30 Days Of JavaScript

console.log(challenge.match(/a/g));

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let days = "30 Days of";
console.log(days.concat(" JavaScript"));

// Use repeat() method to print 30 Days Of JavaScript 2 times

console.log(challenge.repeat(2));
