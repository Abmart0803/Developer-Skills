// Remember, we're gonna use strict mode in all scripts now!
/* eslint-disable no-console */
/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
/* eslint-disable func-names */

const calcAge = (birthYear) => 2023 - birthYear;

console.log(calcAge(1980));
console.log(calcAge(1975));

//  Solving real problem with 4 steps to solve any probelms.
// Problem:
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind
//  that sometimes there might be a sensor error."
// Given temperatures = [3, -2, -6, -1. 'error', 9, 13, 17, 15, 14, 9, 5]

// Using 4 steps to solve the problem.

// Step 1. Understanding the problem 100%.
// --What is temp amplitude?
// Answer: Difference between highest and loest temperature

// -- How to compute max and min temperatures?
// --Whats sensor error? And what to do?
// Answer: any temperature that is not a number, we just need to
// ignore it and continue with numbers.

// Step 2. Breaking the problem into sub-problems.
// --How to ignore erros?
// --Find mas value in temp array
// --Find min value in temp array
// --Subtract min value from max value (amplitude)  and  return it.

// Solution.

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (currTemp === 'string') continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitude([3, 4, 8, 9, 1]);
calcTempAmplitude([3, 4, 8, 9, 1, 0, 34, 76]);
calcTempAmplitude([3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2:
// Function should now receive 2 arrays  of temps

// 1. Understanding the problem.
// -- with 2 arrays should we implement functionality twice?
// -- No! just merge two arrays.

// 2. Breaking up into sub problems.
// --Merge 2 arrays.Breaking
// Solution:

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (currTemp === 'string') continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

//Debugging (fixing Errors).

//Debugging with console and breakpoints.
// Software bug is a defect or problem in a computer program, basically, any unexpected or unintended
// behavious of a computer program is a software bug.

//Exampls.
// Let make a function that prompt  for measurement in Degre celcius and
// process it in kelvin, and debog it using console.

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //value: Number(prompt('Degree celsius:')), // We will fix the bug here by converting the value to number.
    value: 10,
  };
  // console.log(measurement);
  // console.table(measurement);

  // console.log(typeof measurement.value); //B we find the bug here, the typeof measurement.value os string, thats the bug.
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//We have identify a bug here, the result of the kelvin when input 10 degree
//celsius suppose to be 283, but it showing 1073 on console.
console.log(measureKelvin()); //A. Identify Bug.

//Example2.
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (currTemp === 'string') continue;

    debugger; //calling debugger here will open developer tools for you to begug the code.
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
console.log(amplitudeBug);
