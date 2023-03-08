// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};
const daysInSeptember = getDays(2021, 7); // Returns 31

let month = prompt("Enter a month");
if (
  month === "September" ||
  month === "April" ||
  month === "June" ||
  month === "November"
) {
  console.log(`${month} has 30 days.`);
} else if (
  month === "January" ||
  month === "March" ||
  month === "May" ||
  month === "July" ||
  month === "August" ||
  month === "October" ||
  month === "December"
) {
  console.log(`${month} has 31 days.`);
} else if (month === "February") {
  console.log(`${month} has 28 days.`);
} else {
  console.log("Invalid Month Entered");
}

month = prompt("Enter a month");
if (
  month === "September" ||
  month === "April" ||
  month === "June" ||
  month === "November"
) {
  console.log(`${month} has 30 days.`);
} else if (
  month === "January" ||
  month === "March" ||
  month === "May" ||
  month === "July" ||
  month === "August" ||
  month === "October" ||
  month === "December"
) {
  console.log(`${month} has 31 days.`);
} else if (month === "February") {
  console.log(`${month} has 29 days.`);
} else {
  console.log("Invalid Month Entered");
}
