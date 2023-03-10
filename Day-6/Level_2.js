// Develop a small script which generate any number of characters random id:

//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
// Write a script which generates a random hexadecimal number.

// '#ee33df'
// Write a script which generates a random rgb color number.

// rgb(240,180,80)
// Using the above countries array, create the following new array.

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// Using the above countries array, create an array for countries length'.

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// Use the countries array to create the following array of arrays:

//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// ['Finland','Ireland', 'Iceland']
// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// ['Albania', 'Bolivia','Ethiopia']
// Using the above countries array, find the country containing the biggest number of characters.

// Ethiopia
// Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']
// Find the longest word in the webTechs array

// Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

// Print all the elements of array as shown below.

//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB

// Questions

// Develop a small script which generate any number of characters random id:
let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let id = "";

for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * characters.length);
  id += characters[randomIndex];
}

console.log(id);

// Write a script which generates a random hexadecimal number.
let random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

console.log(random_hex_color_code());

// Write a script which generates a random rgb color number.
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

let color = `rgb(${r}, ${g}, ${b})`;

console.log(color);

// Use the countries array to create the following array of arrays:
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

let newArr = [];
for (const country of countries) {
  newArr.push(country.toUpperCase());
}
console.log(newArr);

// Using the above countries array, create an array for countries length'.
let arrLength = [];
for (let i = 0; i < countries.length; i++) {
  arrLength.push(countries[i].length);
}
console.log(arrLength);

// Use the countries array to create the following array of arrays:
newArr = [];
for (const country of countries) {
  let abbr = country.substring(0, 3).toUpperCase();
  let length = country.length;
  newArr.push([country, abbr, length]);
}
console.log(newArr);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let landArr = [];
let noLandArr = [];
for (let i = 0; i < countries.length; i++) {
  countries[i].includes("land")
    ? landArr.push(countries[i])
    : noLandArr.push(countries[i]);
}
console.log(landArr);
console.log(noLandArr);

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let endWithia = [];
let withoutIa = [];
for (let i = 0; i < countries.length; i++) {
  countries[i].endsWith("ia")
    ? endWithia.push(countries[i])
    : withoutIa.push(countries[i]);
}
console.log(endWithia);
console.log("These countries ends without ia ", withoutIa);

// Using the above countries array, find the country containing the biggest number of characters.
let bigChar = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > bigChar.length) {
    bigChar = countries[i];
  }
}
console.log(bigChar);

// Using the above countries array, find the country containing only 5 characters.
let fiveCharCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length == 5) {
    fiveCharCountries.push(countries[i]);
  }
}
console.log(fiveCharCountries);

// Find the longest word in the webTechs array
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let longestTech = [];
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > longestTech.length) {
    longestTech = webTechs[i];
  }
}
console.log(longestTech);

newArr = [];
for (const webTech of webTechs) {
  let length = webTech.length;
  newArr.push([webTech, length]);
}
console.log(newArr);

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const array = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruit = ["banana", "orange", "mango", "lemon"];
let reversedFruit = [];
for (let i = fruit.length - 1; i >= 0; i--) {
  let reverse = fruit[i];
  reversedFruit.push(reverse);
}
console.log(reversedFruit);

// Print all the elements of array as shown below.
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}
