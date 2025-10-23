// function normal() {
//   console.log(this); // depends on caller
// }
// const arrow = () => console.log(this); // takes 'this' from parent


// let str = "arpan";

// let newStr = str.split("").reverse().join()

// console.log(newStr)


// function isPalindrome(str) {
//   str = str.toLowerCase();
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("Arpan"));   // false


// function isspal(str){
//     str = str.toLowerCase();
//     for (let i = 0; i < str.length/2; i++) {
//       if (str[i] != str[str.length-1-i]) {
//         return false
//       }
        
//     }
//     return true;
// }
   

// console.log(isspal("racecar"));


// let str = "arpan";
// let vowels = "aeiou";
// let count = 0;

// for (let index = 0; index < str.length; index++) {
    
//     if (vowels.includes(str[index])) {
//         count++
//     }
// }
// console.log(`the number of vowels are : ${count}`)


// let str = [12,34,3,45,6,8];

// let largest = str.reduce((max,crr) => crr > max ? crr : max,str[0])
// let lowest = str.reduce((min,crr) => crr < min ? crr : min,str[0]);

// console.log(`the largest number of the arry is ${largest}`)
// console.log(`the smallest number of the arry is ${lowest}`)

// const arr = [3, 7, 2, 9, 4];

// let larrgest = arr[0];
// let smallest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > largest) largest = arr[i];
//   if (arr[i] < smallest) smallest = arr[i];
// }

// console.log("Largest:", largest);   // 9
// console.log("Smallest:", smallest); // 2


// function outer() {
//     const userName = "arpan";
//     function inner() {
//         const website = "youtube";
//         console.log(userName)
//     };
//     inner()
// }
// outer()

// console.log({} === {}) // false
// console.log({} == {}) // false

 