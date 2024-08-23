// TASK 1-2-3 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// import { arr } from "./data.js";
// import { checkThePrime, a } from "./functions.js";
// import { abdulaziz } from "./confunctions.js";

// console.log(arr);
// console.log(checkThePrime(a));
// console.log(abdulaziz);









// TASK 4 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// "abcd" => "a-bb-ccc-dddd"

// let str = 'abcd';

// const y = (index, value) => {
//     let repeatEach = '';
//     for (let i = 0; i < index + 1; i++){
//         repeatEach += value;
//     }
//     return repeatEach;
// }

// const x = (str) => {
//     let repeated = '';
//     let result; 
//     for (let i = 0; i < str.length; i++) {
//         repeated += y(i, str[i]) + '-';
//         result = repeated.slice(0, repeated.length - 1);
//     }
//     return result;
// }

// console.log(x(str));









// TASK 5 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// T-5.1 Using the string methods (split(""), reverse(), join(""))

// let str = 'Aziza';

// const checkThePalindrome = (str) => {
//     let newStr = str.split('').reverse().join('');
//     return str.toLowerCase() == newStr.toLowerCase();
// }

// console.log(checkThePalindrome(str));

// Task 5 Note:

// The String Method .split("") does take each character of the string, return them seperately in an array
// if it is written without quotes inside its set of parantheses, .split(), it does return the whole string in an array

// The Array Method .join("") does convert the Array to String with being joined each value of the Array into String
// the output will be: ['a', 'z'] => 'az'




// T-5.2 Using for-loop

// let str = 'HUSSUh';

// const checkThePalindrome = (str) => {
//     let middle = Math.floor(str.length / 2);
//     let firstP = '';
//     let lastP = '';
//     if (str.length % 2 == 0) {
//         for (let i = 0; i < middle; i++) {
//             firstP += str[i];
//         }
//     } else {
//         for (let i = 0; i <= middle; i++) {
//             firstP += str[i];
//         }
//     }
//     for (let i = str.length - 1; i >= middle; i--) {
//         lastP += str[i];
//     }
//     return firstP.toLowerCase() == lastP.toLowerCase();
// }

// console.log(checkThePalindrome(str));









// TASK 6 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// string harflari qaytarilmagan bo'lsa true yoki false

// let str = 'abcdef';

// const checkTheDuplicate = (str) => {

//     let newStr = [];
//     let result;
//     for (let i = 0; i < str.length; i++) {
//         result = newStr.find((item) => item == str[i].toLowerCase());
//         if (!result) {
//             newStr.push(str[i]);
//         }
//     }
//     return newStr.join('') == str;
// }

// console.log(checkTheDuplicate(str));









// TASK 7 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// arrey ichidagi raqamar yeg’indisi juft yoki toq 


// Using two functions 
// let arr = [1, 2, 3, 4];

// const isSumEvenOdd = (sum) => {
//     if (sum % 2 == 0) {
//         return `The Sum (${sum}) is Even`;
//     } else {
//         return `The Sum (${sum}) is Odd`;
//     }
// }

// const findSum = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return isSumEvenOdd(sum);
// }

// console.log(findSum(arr));




// Using one function

// let arr = [1, 2, 3, 4, 5];

// const isSumEvenOdd = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     if (sum % 2 == 0) {
//         return `The sum, ${sum}, is Even`;
//     } else {
//         return `The sum, ${sum}, is Odd`;
//     }
// }
// console.log(isSumEvenOdd(arr));









// TASK 8 ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// raqam beriladi shu raqam bo’luvchilarini bitta arreyga solib qaytarsin tub bo’lsa tub so’zini

// let a = 20;

// const isPrime = (divisors) => {
//     let count = 0;
//     for (let i = 1; i <= divisors; i++) {
//         if (divisors % i == 0) {
//             count++;
//         }
//     }
//     if (count == 2) {
//         return 'Tub';
//     } else {
//         return divisors;
//     }
// }

// const findTheDivisorsPrime = (a) => {
//     let allDivisors = [];
//     for (let i = 0; i <= a; i++) {
//         if (a % i == 0) {
//             allDivisors.push(isPrime(i));
//         }
//     }
//     return allDivisors;
// }

// console.log(findTheDivisorsPrime(a));
