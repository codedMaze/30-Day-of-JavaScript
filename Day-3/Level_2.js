// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// If the length of your name is greater than 7 say, your name is long else say your name is short.

// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100
// You lived 3153600000 seconds.
// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

// Question

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20

let base = prompt("Enter base", "");
let height = prompt("Enter height", "");
let area = (+base * +height) / 2;
alert("The area of the triangle is " + area);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let a = prompt("Enter the value of a");
let b = prompt("Enter the value of b");
let c = prompt("Enter the value of c");
let perimeter = +a + +b + +c;
console.log("The perimeter of the triangle is " + perimeter);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt("Enter the value of the length");
let width = prompt("Enter the value of the width");
area = +length * +width;
perimeter = 2 * (length + width);
console.log(
  "The area of rectangle is " +
    area +
    " and the perimeter of the rectangle is " +
    perimeter
);

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let radius = prompt("Enter the value of the radius");
let pi = 3.14;
area = pi * +radius * +radius;
cirF = 2 * pi * radius;
console.log(
  "The area of the circle is " +
    area +
    " and the circumference of the circle is " +
    cirF
);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

let y1 = 2;
let x1 = 2;
let y2 = 10;
let x2 = 6;
let m = (y2 - y1) / (x2 - x1);
console.log(m);

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hours = prompt("Enter hours: ");
let ratePerHour = prompt("Enter rate per hour: ");
let weeklyEarning = +hours * +ratePerHour;
console.log("Your weekly earning is " + weeklyEarning);

// If the length of your name is greater than 7 say, your name is long else say your name is short.

let name = "codedMaze";
Myname.length
  ? console.log("My name is long")
  : console.log("My name is short");

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let firstName = "Asabeneh";
let lastName = "Yetayeh";
firstName.length === lastName.length
  ? console.log("The length are the same")
  : console.log(
      `Your first name, ${firstName} is longer than your family name, ${lastName}`
    );

// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let myAge = 250;
let yourAge = 25;
let diff = myAge - yourAge;
console.log("I am " + diff + " years older than you");

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

let birthYear = prompt("Enter birth year: ");
let userAge = now.getFullYear() - birthYear;
let lessAge = 18 - userAge;

userAge >= 18
  ? console.log(`You are ${userAge}. You are old enough to drive`)
  : console.log(
      `You are ${userAge}. You will be allowed to drive after ${lessAge} years.`
    );

// Enter number of years you live: 100
// You lived 3153600000 seconds.

let yearNum = prompt("Enter number of years");
const minAYear = 31536000;
const aliveSec = +yearNum * minAYear;
console.log(aliveSec);

// Create a human readable time format using the Date time object

// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
hours = now.getHours();
let minutes = now.getMinutes();
//1
console.log(`${year}-${month}-${date} ${hours}:${minutes}`);
//2
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
//3
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
