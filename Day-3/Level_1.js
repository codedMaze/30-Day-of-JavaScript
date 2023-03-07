// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

// Check if type of '10' is equal to 10

// Check if parseInt('9.8') is equal to 10

// Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.
// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3
// 4 >= 3
// 4 < 3
// 4 <= 3
// 4 == 4
// 4 === 4
// 4 != 4
// 4 !== 4
// 4 != '4'
// 4 == '4'
// 4 === '4'
// Find the length of python and jargon and make a falsy comparison statement.
// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12
// 4 > 3 && 10 > 12
// 4 > 3 || 10 < 12
// 4 > 3 || 10 > 12
// !(4 > 3)
// !(4 < 3)
// !(false)
// !(4 > 3 && 10 < 12)
// !(4 > 3 && 10 > 12)
// !(4 === '4')
// There is no 'on' in both dragon and python
// Use the Date object to do the following activities

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.

// Question

// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Adeolu";
let lastName = "Adesola";
let country = "Brazil";
let city = "São Paulo";
let age = 30;
let isMarried = true;
let year = 2020;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// Check if type of '10' is equal to 10

let num_1 = "10";
let num_2 = 10;
console.log(num_1 === num_2);

// Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8") === 10);

// Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.

console.log(true);
console.log("string");
console.log(20);

// Write three JavaScript statement which provide falsy value.
console.log("");
console.log(null);
console.log(false);

// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// 4 > 3  true
console.log(4 > 3);

// 4 >= 3  true
console.log(4 >= 3);

// 4 < 3  false
console.log(4 < 3);

// 4 <= 3  false
console.log(4 <= 3);

// 4 == 4  true
console.log(4 == 4);

// 4 === 4  true
console.log(4 === 4);

// 4!= 4  false
console.log(4 != 4);

// 4!== 4  false
console.log(4 !== 4);

// 4!= '4'  false
console.log(4 != "4");

// 4 == '4'  true
console.log(4 == "4");

// 4 === '4'  false
console.log(4 === "4");

// Find the length of python and jargon and make a falsy comparison statement.

console.log("python".length !== "jargon".length);

// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

// 4 > 3 && 10 < 12  true
console.log(4 > 3 && 10 < 12);

// 4 > 3 && 10 > 12  false
console.log(4 > 3 && 10 > 12);

// 4 > 3 || 10 < 12  true
console.log(4 > 3 || 10 < 12);

// 4 > 3 || 10 > 12  true
console.log(4 > 3 || 10 > 12);

//!(4 > 3)  false
console.log(!(4 > 3));

//!(4 < 3)  true
console.log(!(4 < 3));

//!(false)  true
console.log(!false);

//!(4 > 3 && 10 < 12)  false
console.log(!(4 > 3 && 10 < 12));

//!(4 > 3 && 10 > 12)  true
console.log(!(4 > 3 && 10 > 12));

//!(4 === '4')  true
console.log(!(4 === "4"));

// There is no 'on' in both dragon and python

//false
console.log(!("dragon".includes("on") && "python".includes("on")));

// Use the Date object to do the following activities

// What is the year today?
let today = new Date();
console.log(today.getFullYear());

// What is the month today as
console.log(today.getMonth());

// What is the date today?
console.log(today.getDate());

// What is the day today as
console.log(today.getDay());

// What is the hours now?
console.log(today.getHours());

// What is the minutes now?
console.log(today.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(today.getTime());
