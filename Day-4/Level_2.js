// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// Check if a day is weekend day or a working day. Your script will take day as an input.

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let score = prompt("Enter your score: ");
if (score >= 80 && score <= 100) {
  console.log("A");
} else if (score >= 70 && score < 80) {
  console.log("B");
} else if (score >= 60 && score < 70) {
  console.log("C");
} else if (score >= 50 && score < 60) {
  console.log("D");
} else {
  console.log("F");
}

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let wether = prompt("Please enter Month:");
let iputedWether = wether.toLowerCase();
switch (iputedWether) {
  case "january":
  case "february":
  case "december":
    console.log("the season is Winter.");
    break;
  case "march":
  case "april":
  case "may":
    console.log("the season is Spring.");
    break;
  case "june":
  case "july":
  case "august":
    console.log("the season is Summer.");
    break;
  case "september":
  case "october":
  case "november":
    console.log("the season is Autumn.");
    break;
  default:
    console.log("enter valid month");
}

// Check if a day is weekend day or a working day. Your script will take day as an input.

let day = prompt("What is the day today: ");
if (
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday" ||
  day === "Friday"
) {
  console.log(`${day} + is a working day`);
} else if (day === "Saturday" || day === "Sunday") {
  console.log(`${day} is a weekend`);
} else {
  console.log("Day is not valid");
}
