// Declare an empty array;
// Declare an array with more than 5 number of elements
// Find the length of your array
// Get the first item, the middle item and the last item of the array
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
// Print the array using console.log()
// Print the number of companies in the array
// Print the first company, middle and last company
// Print out each company
// Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// Filter out companies which have more than one 'o' without the filter method
// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies

// Question

// Declare an empty array;
let emptyArray = [];

// Declare an array with more than 5 number of elements
let arrayOfFiveAbove = [1, 2, 3, 4, 5, 6, 7];

// Find the length of your array
console.log(arrayOfFiveAbove.length);

// Get the first item, the middle item and the last item of the array
console.log(arrayOfFiveAbove[0]);
console.log(arrayOfFiveAbove[(arrayOfFiveAbove.length - 1) / 2]);
console.log(arrayOfFiveAbove[arrayOfFiveAbove.length - 1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ["last", 3, true, null, 100, "bus", false];

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf("Facebook");
index === -1
  ? "return a company is not found"
  : console.log(itCompanies[index]);

// Filter out companies which have more than one 'o' without the filter method

// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(4));

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4));

// Remove the first IT company from the array
console.log(itCompanies.shift());

// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(3, 1));

// Remove the last IT company from the array
console.log(itCompanies.pop());

// Remove all IT companies
console.log(itCompanies.splice(0, itCompanies.length - 1));
