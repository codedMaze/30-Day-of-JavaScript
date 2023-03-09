// The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

// Questions
// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortedAges = ages.sort();
const minAges = sortedAges[0];
const maxAges = sortedAges[sortedAges.length - 1];
const medianAge =
  (sortedAges[sortedAges.length / 2] + sortedAges[sortedAges.length / 2 - 1]) /
  2;
const averageAge = sortedAges.reduce((a, b) => a + b, 0) / sortedAges.length;
const rangeAge = Math.abs(maxAges - minAges);
console.log(minAges, maxAges, medianAge, averageAge, rangeAge);

// Find the middle country(ies) in the countries array
let countries = [
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
let middleCountry = countries[Math.floor(countries.length / 2)];
console.log(middleCountry);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
countries.lenth % 2 === 0 ? countries.lenth / 2 : countries.lenth;
