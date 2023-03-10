// Iterate 0 to 10 using for loop, do the same using while and do while loop

// Iterate 10 to 0 using for loop, do the same using while and do while loop

// Iterate 0 to n using for loop

// Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// Use for loop to iterate from 0 to 100 and print only even numbers

// Use for loop to iterate from 0 to 100 and print only odd numbers

// Use for loop to iterate from 0 to 100 and print only prime numbers

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// The sum of all numbers from 0 to 100 is 5050.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

//   [2550, 2500]

// Develop a small script which generate array of 5 random numbers

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

// Develop a small script which generate a six characters random id:

// Question
// Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (i = 10; i >= 0; i--) {
  console.log(i);
}
i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}

// Iterate 0 to n using for loop
// for (i = 0; i <= n; i++) {
//   return i;
// }

// Write a loop that makes the following pattern using console.log():
for (i = 0; i <= 7; i++) {
  let string = "";
  for (let j = 0; j < i; j++) {
    string += "#";
  }
  console.log(string);
}

// Use loop to print the following pattern:
for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
for (i = 1; i <= 100; i++) {
  let isPrime = true;

  for (j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (i == 1) {
    isPrime = undefined;
  }
  if (isPrime) {
    console.log(`${i} is a prime number`);
  } else {
    console.log(`${i} is a not prime number`);
  }
}

// The sum of all numbers from 0 to 100 is 5050.
let sum = 0;
for (i = 0; i <= 100; i++) {
  sum += i;
}

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum, oddSum;
for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? (evenSum += i) : (oddSum += i);
}
console.log(evenSum, oddSum);

// Develop a small script which generate array of 5 random numbers
const ranArr = [];
for (let i = 0; i <= 4; i++) {
  let ranNum = Math.floor(Math.random() * 100 + 1);
  ranArr.push(ranNum);
}
console.log(ranArr);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
const uniqueArr = [];
for (let i = 0; uniqueArr.length <= 4; i++) {
  let ranNum = Math.floor(Math.random() * 10000);
  if (!uniqueArr.includes(ranNum)) {
    uniqueArr.push(ranNum);
  }
}
console.log(uniqueArr);
