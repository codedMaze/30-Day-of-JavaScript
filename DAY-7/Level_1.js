// Declare a function fullName and it print out your full name.

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

// Declare a function addNumbers and it takes two two parameters and it returns sum.

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

// Question

// Declare a function fullName and it print out your full name.
let fullName = () => {
  console.log("firstName lastName");
};

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
fullName = (firstName, lastName) => {
  console.log(firstName, lastName);
};

// Declare a function addNumbers and it takes two two parameters and it returns sum.
let addNumber = (a, b) => {
  return a + b;
};

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => {
  return length * width;
};

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (length, width) => {
  return 2 * (length * width);
};

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (length, width, height) => {
  return length * width * height;
};

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (r) => {
  return 3.14 * r * r;
};

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = (r) => {
  return 2 * 3.14 * r;
};

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = (mass, volume) => {
  return mass / volume;
};

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
const speedOfMovingObject = (distance, time) => {
  return distance / time;
};

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weight = (mass, gravity) => {
  return mass * gravity;
};

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
const convertCelsiusToFahrenheit = (celsius) => {
  return celsius * (9 / 5) + 32;
};

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
const bodyMassIndex = (weightKG, height) => {
  const bmi = weightKG / (height * height);
  if (bmi < 18.5) {
    console.log("Underweight: Your BMI (" + bmi + ") is less than 18.5");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(
      "Normal weight: Your BMI (" + bmi + ") is between 18.5 and 24.9"
    );
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Overweight: Your BMI (" + bmi + ") is between 25 and 29.9");
  } else {
    console.log("Obese: Your BMI (" + bmi + ") is 30 or above");
  }
  return bmi;
};

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const checkSeason = (month) => {
  if (month === "December" || month === "January" || month === "February") {
    console.log("The season is Winter");
  } else if (month === "March" || month === "April" || month === "May") {
    console.log("The season is Spring");
  } else if (month === "June" || month === "July" || month === "August") {
    console.log("The season is Summer");
  } else if (
    month === "September" ||
    month === "October" ||
    month === "November"
  ) {
    console.log("The season is Autumn");
  } else {
    console.log("Month is invalid");
  }
  return month;
};

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (a, b, c) => {
  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
};
